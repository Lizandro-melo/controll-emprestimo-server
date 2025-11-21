import { emprestimo } from "@prisma/logic";

export default interface IEmprestimoRepository {
  create_emprestimo({ ...props }: emprestimo): Promise<void>;
  consult_all_by_uuid({
    uuid_auth,
  }: {
    uuid_auth: string;
  }): Promise<emprestimo[]>;
}
