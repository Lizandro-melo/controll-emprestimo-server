import AuthRepository from "@/data/repositories/AuthRepository";
import ClienteRepository from "@/data/repositories/ClienteRepository";
import { cliente_props, create_cliente } from "@/domain/entities";
import { cliente } from "@/../prisma/generated/logic/client";
import { isCPF } from "validation-br";

const auth_repository = new AuthRepository();
const cliente_repository = new ClienteRepository();

export async function createCliente({
  session,
  create_cliente,
}: {
  session: string;
  create_cliente: create_cliente;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });
  create_cliente.num_cpf = create_cliente.num_cpf
    .replaceAll(".", "")
    .replace("-", "");
  // if (!isCPF(create_cliente.num_cpf)) throw new Error("Numero de CPF invalido");
  await cliente_repository.consult_cpf_cliente_by_uuid_cliente({
    num_cpf: create_cliente?.num_cpf,
    uuid_auth,
  });
  try {
    await cliente_repository.register_cliente({ uuid_auth, create_cliente });
  } catch {
    throw new Error("Não foi possivel cadastrar o cliente");
  }
}

export async function findCliente({
  ...props
}: {
  session: string;
  uuid_cliente: string;
}): Promise<cliente_props> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });

  return await cliente_repository.consult_cliente_by_uuid_cliente({
    uuid_auth: uuid_auth,
    uuid_cliente: props.uuid_cliente,
  });
}

export async function updateCliente({
  ...props
}: {
  cliente_props: cliente_props;
  session: string;
}): Promise<void> {
  if (!isCPF(props.cliente_props.cliente.num_cpf))
    throw new Error("Numero de CPF invalido");
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  await cliente_repository.update_cliente_by_cliente_props({
    cliente_props: props.cliente_props,
    uuid_auth,
  });
}

export async function findClientePage({
  ...props
}: {
  session: string;
  page: number;
}): Promise<cliente[]> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  return await cliente_repository.consult_clientes_by_uuid_auth_and_page({
    uuid_auth,
    page: props.page,
  });
}

export async function deleteCliente({
  ...props
}: {
  session: string;
  uuid_cliente: string;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  await cliente_repository.delete_cliente({
    uuid_auth: uuid_auth,
    uuid_cliente: props.uuid_cliente,
  });
}
