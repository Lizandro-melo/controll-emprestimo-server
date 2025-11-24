import { cliente_props, create_cliente, find_cliente } from "../entities";
import { cliente } from "@prisma/logic";

export default interface IClienteRepository {
  register_cliente({
    uuid_auth,
    create_cliente,
  }: {
    uuid_auth: string;
    create_cliente: create_cliente;
  }): Promise<void>;
  consult_cpf_cliente_by_uuid_cliente({
    num_cpf,
    uuid_auth,
  }: {
    num_cpf: string;
    uuid_auth: string;
  }): Promise<void>;
  consult_cliente_by_uuid_cliente({
    ...props
  }: {
    uuid_cliente: string;
    uuid_auth: string;
  }): Promise<cliente_props>;
  update_cliente_by_cliente_props({
    ...props
  }: {
    cliente_props: cliente_props;
    uuid_auth: string;
  }): Promise<void>;
  consult_clientes_by_uuid_auth_and_page({
    ...props
  }: {
    uuid_auth: string;
    page: number;
  }): Promise<cliente[]>;
  delete_cliente({
    ...props
  }: {
    uuid_cliente: string;
    uuid_auth: string;
  }): Promise<void>;
}
