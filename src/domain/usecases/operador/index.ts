import AuthRepository from "@/data/repositories/AuthRepository";
import { operador_profile } from "@/domain/entities";
import { Prisma_logic } from "@/infra/db";
import moment from "moment-timezone";

const auth_repository = new AuthRepository();

export async function getOperadorProfile({
  session,
}: {
  session: string;
}): Promise<operador_profile> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });

  const operador = await Prisma_logic.operador.findUnique({
    where: {
      uuid: uuid_auth,
    },
  });

  if (!operador) {
    throw new Error("Operador nao encontrado.");
  }

  return {
    uuid: operador.uuid,
    nome_completo: operador.nome_completo,
    num_cpf: operador.num_cpf,
    num_cnpj: operador.num_cnpj ?? null,
    correio_eletronico: operador.correio_eletronico,
    data_nascimento: operador.data_nascimento
      ? operador.data_nascimento.toISOString()
      : null,
  };
}

export async function updateOperadorProfile({
  session,
  profile,
}: {
  session: string;
  profile: {
    nome_completo: string;
    num_cpf: string;
    correio_eletronico: string;
    data_nascimento?: string | null;
    num_cnpj?: string | null;
  };
}): Promise<void> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });

  const num_cnpj = profile.num_cnpj
    ? profile.num_cnpj.replaceAll(".", "").replaceAll("-", "").trim()
    : null;

  const data_nascimento = profile.data_nascimento
    ? moment(profile.data_nascimento).toDate()
    : null;

  await Prisma_logic.operador.update({
    where: {
      uuid: uuid_auth,
    },
    data: {
      nome_completo: profile.nome_completo,
      num_cnpj,
      correio_eletronico: profile.correio_eletronico,
      data_nascimento,
    },
  });
}
