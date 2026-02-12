import AuthRepository from "@/data/repositories/AuthRepository";
import { register } from "@/domain/entities";
import { ASSAS } from "@/infra/constants";
import { Prisma_auth, Prisma_logic } from "@/infra/db";
import { sendOtpEmail } from "@/infra/mail";
import { Tipo_User } from "@/../prisma/generated/auth";
import { compare, hash } from "bcrypt";
import { isCPF } from "validation-br";
import { SALT_ROUNDS } from "@/infra/constants";

const auth = new AuthRepository();

export async function register_operador({
  token,
  register,
}: {
  token: string;
  register: register;
}) {
  await auth.token_register_validation({ token });
  register.num_cpf = register.num_cpf.replaceAll(".", "").replace("-", "");
  if (!isCPF(register.num_cpf)) throw new Error("Numero de CPF invalido");
  if (register.senha !== register.senha_confirmacao)
    throw new Error("As senhas então diferentes!");
  await auth.create_operador(register);
  await auth.disable_token_register({ token });
}

export async function login({
  ...props
}: {
  login: string;
  senha: string;
}): Promise<string> {
  props.login = props.login.replaceAll(".", "").replace("-", "");
  const { uuid_auth, id_sub } = await auth.consult_uuid_auth_by_cpf({
    cpf: props.login,
  });
  const invoiceUrl = await ASSAS.consult_sub(id_sub);
  if (invoiceUrl) {
    const error: any = new Error(
      "Nao foi possivel efetuar o login: existe uma fatura vencida em sua conta.",
    );
    error.invoiceUrl = invoiceUrl;
    throw error;
  }
  if (
    await compare(
      props.senha,
      await auth.consult_senha_crypt_by_uuid({ uuid_auth }),
    )
  ) {
    let session = await auth.consult_session_by_uuid({ uuid_auth });
    if (!session) {
      session = await auth.generate_session_by_uuid({ uuid_auth });
    }
    return session;
  } else {
    throw new Error("Login ou senha inválidos");
  }
}

export async function session_consult({
  session,
}: {
  session: string;
}): Promise<Tipo_User | undefined> {
  const { uuid_auth, id_sub } = await auth.consult_uuid_auth_by_session({
    session,
  });
  const invoiceUrl = await ASSAS.consult_sub(id_sub);
  if (invoiceUrl) {
    const error: any = new Error(
      "Nao foi possivel efetuar o login: existe uma fatura vencida em sua conta.",
    );
    error.invoiceUrl = invoiceUrl;
    throw error;
  }
  return await auth.consult_tipo_user_by_uuid({ uuid_auth });
}

export async function alterar_senha({
  session,
  senha_atual,
  senha_nova,
  senha_confirmacao,
}: {
  session: string;
  senha_atual: string;
  senha_nova: string;
  senha_confirmacao: string;
}): Promise<void> {
  if (!senha_atual || !senha_nova || !senha_confirmacao) {
    throw new Error("Preencha todos os campos.");
  }
  if (senha_nova !== senha_confirmacao) {
    throw new Error("As senhas nao coincidem.");
  }
  const regras = validarForcaSenha(senha_nova);
  if (!regras.valid) {
    throw new Error(`Senha fraca. ${regras.errors.join(" • ")}`);
  }
  const { uuid_auth } = await auth.consult_uuid_auth_by_session({
    session,
  });

  const senhaAtualHash = await auth.consult_senha_crypt_by_uuid({ uuid_auth });
  const ok = await compare(senha_atual, senhaAtualHash);
  if (!ok) {
    throw new Error("Senha atual invalida.");
  }

  const novaHash = await hash(senha_nova, SALT_ROUNDS);
  await auth.update_senha({ uuid_auth, senha_hash: novaHash });
}

function validarForcaSenha(senha: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (senha.length < 8) {
    errors.push("Minimo de 8 caracteres");
  }
  if (!/[A-Z]/.test(senha)) {
    errors.push("Pelo menos uma letra maiuscula");
  }
  if (!/[0-9]/.test(senha)) {
    errors.push("Pelo menos um numero");
  }
  if (!/[^A-Za-z0-9]/.test(senha)) {
    errors.push("Pelo menos um caractere especial");
  }
  return { valid: errors.length === 0, errors };
}

export async function solicitar_otp_redefinicao({
  cpf,
}: {
  cpf: string;
}): Promise<void> {
  const cleanCpf = cpf.replaceAll(".", "").replaceAll("-", "").trim();
  if (!cleanCpf) {
    throw new Error("CPF obrigatorio.");
  }

  const operador = await Prisma_logic.operador.findUnique({
    where: {
      num_cpf: cleanCpf,
    },
  });
  if (!operador) {
    throw new Error("CPF nao encontrado.");
  }

  const authUser = await Prisma_auth.auth.findUnique({
    where: {
      uuid: operador.uuid,
    },
  });
  if (!authUser) {
    throw new Error("CPF nao encontrado.");
  }

  const code = `${Math.floor(100000 + Math.random() * 900000)}`;

  await Prisma_auth.historico_otp.upsert({
    where: {
      uuid: authUser.uuid,
    },
    create: {
      uuid: authUser.uuid,
      code_otp: code,
    },
    update: {
      code_otp: code,
      record_create: new Date(),
    },
  });

  await sendOtpEmail(operador.correio_eletronico, code);
}

export async function verificar_otp_redefinicao({
  cpf,
  code,
}: {
  cpf: string;
  code: string;
}): Promise<void> {
  const cleanCpf = cpf.replaceAll(".", "").replaceAll("-", "").trim();
  if (!cleanCpf) {
    throw new Error("CPF obrigatorio.");
  }
  if (!code || code.length !== 6) {
    throw new Error("Codigo invalido.");
  }

  const operador = await Prisma_logic.operador.findUnique({
    where: {
      num_cpf: cleanCpf,
    },
  });
  if (!operador) {
    throw new Error("CPF nao encontrado.");
  }

  const authUser = await Prisma_auth.auth.findUnique({
    where: {
      uuid: operador.uuid,
    },
  });
  if (!authUser) {
    throw new Error("CPF nao encontrado.");
  }

  const otp = await Prisma_auth.historico_otp.findUnique({
    where: {
      uuid: authUser.uuid,
    },
  });
  if (!otp || otp.code_otp !== code) {
    throw new Error("Codigo invalido.");
  }
}

export async function resetar_senha_otp({
  cpf,
  code,
  senha_nova,
  senha_confirmacao,
}: {
  cpf: string;
  code: string;
  senha_nova: string;
  senha_confirmacao: string;
}): Promise<void> {
  if (!senha_nova || !senha_confirmacao) {
    throw new Error("Preencha todos os campos.");
  }
  if (senha_nova !== senha_confirmacao) {
    throw new Error("As senhas nao coincidem.");
  }
  const regras = validarForcaSenha(senha_nova);
  if (!regras.valid) {
    throw new Error(`Senha fraca. ${regras.errors.join(" • ")}`);
  }

  const cleanCpf = cpf.replaceAll(".", "").replaceAll("-", "").trim();
  if (!cleanCpf) {
    throw new Error("CPF obrigatorio.");
  }
  if (!code || code.length !== 6) {
    throw new Error("Codigo invalido.");
  }

  const operador = await Prisma_logic.operador.findUnique({
    where: {
      num_cpf: cleanCpf,
    },
  });
  if (!operador) {
    throw new Error("CPF nao encontrado.");
  }

  const authUser = await Prisma_auth.auth.findUnique({
    where: {
      uuid: operador.uuid,
    },
  });
  if (!authUser) {
    throw new Error("CPF nao encontrado.");
  }

  const otp = await Prisma_auth.historico_otp.findUnique({
    where: {
      uuid: authUser.uuid,
    },
  });
  if (!otp || otp.code_otp !== code) {
    throw new Error("Codigo invalido.");
  }

  const novaHash = await hash(senha_nova, SALT_ROUNDS);
  await auth.update_senha({ uuid_auth: authUser.uuid, senha_hash: novaHash });
  await Prisma_auth.historico_otp.update({
    where: {
      uuid: authUser.uuid,
    },
    data: {
      code_otp: "USADO",
      record_create: new Date(),
    },
  });
}
