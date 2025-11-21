import AuthRepository from "@/data/repositories/AuthRepository";
import EmprestimoRepository from "@/data/repositories/EmprestimoRepository";
import { emprestimo } from "@prisma/logic";

const auth_repository = new AuthRepository();
const emprestimo_repository = new EmprestimoRepository();

export async function createEmprestimo({
  session,
  emprestimo_props,
}: {
  session: string;
  emprestimo_props: emprestimo;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });
  emprestimo_props.uuid_operador = uuid_auth;
  await emprestimo_repository.create_emprestimo(emprestimo_props);
}
