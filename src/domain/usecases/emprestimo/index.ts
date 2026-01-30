import AuthRepository from "@/data/repositories/AuthRepository";
import EmprestimoRepository from "@/data/repositories/EmprestimoRepository";
import { create_emprestimo_props, emprestimo_find_props } from "@/domain/entities";
import { emprestimo } from "@prisma/logic";

const auth_repository = new AuthRepository();
const emprestimo_repository = new EmprestimoRepository();

export async function createEmprestimo({
  session,
  emprestimo_props,
}: {
  session: string;
  emprestimo_props: Omit<create_emprestimo_props, "uuid_operador">;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });
  await emprestimo_repository.create_emprestimo({
    ...emprestimo_props,
    uuid_operador: uuid_auth,
  });
}

export async function findEmprestimoPage({
  ...props
}: {
  session: string;
  page: number;
}): Promise<emprestimo[]> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  return await emprestimo_repository.consult_emprestimo_by_uuid_auth_page({
    uuid_auth,
    page: props.page,
  });
}

export async function findEmprestimoUnique({
  ...props
}: {
  session: string;
  uuid_emprestimo: string;
}): Promise<emprestimo_find_props> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  return emprestimo_repository.consult_emprestimo_by_uuid_emprestimo({
    uuid_auth: uuid_auth,
    uuid_emprestimo: props.uuid_emprestimo,
  });
}

export async function updateEmprestimo({
  ...props
}: {
  session: string;
  emprestimo_props: emprestimo;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  try {
    await emprestimo_repository.update_emprestimo({
      emprestimo_props: props.emprestimo_props,
      uuid_auth: uuid_auth,
    });
  } catch (error) {
    throw new Error("Não foi possível atualizar as informações do emprestimo");
  }
}

export async function deleteEmprestimo({
  ...props
}: {
  session: string;
  uuid_emprestimo: string;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  return emprestimo_repository.delete_emprestimo({
    uuid_auth: uuid_auth,
    uuid_emprestimo: props.uuid_emprestimo,
  });
}
