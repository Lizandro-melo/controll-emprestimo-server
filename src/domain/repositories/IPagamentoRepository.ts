import { update_pagamento_props } from "../entities";
import { pagamento } from "@prisma/logic";

export default interface IPagamentoRepository {
  lancar_pagamento({
    update_pagamento_props,
  }: {
    update_pagamento_props: update_pagamento_props;
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
}
