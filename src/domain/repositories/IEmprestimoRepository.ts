import { emprestimo } from "@prisma/logic";
import {
  create_emprestimo_props,
  emprestimo_find_props,
  update_emprestimo_props,
} from "../entities";

export default interface IEmprestimoRepository {
  create_emprestimo({ ...props }: create_emprestimo_props): Promise<void>;
  consult_all_by_uuid({
    uuid_auth,
  }: {
    uuid_auth: string;
  }): Promise<emprestimo[]>;
  consult_emprestimo_by_uuid_auth_page({
    ...props
  }: {
    uuid_auth: string;
    page: number;
  }): Promise<emprestimo[]>;
  consult_emprestimo_by_uuid_emprestimo({
    ...props
  }: {
    uuid_auth: string;
    uuid_emprestimo: string;
  }): Promise<emprestimo_find_props>;
  update_emprestimo({
    ...props
  }: {
    uuid_auth: string;
    emprestimo_props: update_emprestimo_props;
  }): Promise<void>;
  delete_emprestimo({
    ...props
  }: {
    uuid_auth: string;
    uuid_emprestimo: string;
  }): Promise<void>;
}
