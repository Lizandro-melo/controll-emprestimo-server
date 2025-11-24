import { pagamento_props } from "../entities";
import { pagamento } from "@prisma/logic";

export default interface IPagamentoRepository {
  lancar_pagamento({
    pagamento_props,
  }: {
    pagamento_props: pagamento_props;
  }): Promise<void>;
  consult_all_pagamento_by_uuid({
    ...props
  }: {
    uuid_auth: string;
  }): Promise<pagamento[]>;
  consult_pagamento_by_uuid_auth_and_page({
    ...props
  }: {
    uuid_auth: string;
    page: number;
  }): Promise<pagamento[]>;
  consult_pagamento_by_uuid_pagamento({
    ...props
  }: {
    uuid_pagamento: string;
  }): Promise<pagamento_props>;
}
