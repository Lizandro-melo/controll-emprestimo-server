import AuthRepository from "@/data/repositories/AuthRepository";
import PagamentoRepository from "@/data/repositories/PagamentosRepository";
import { pagamento_props } from "@/domain/entities";
import { pagamento } from "@/../prisma/generated/logic";

const auth_repository = new AuthRepository();
const pagamento_repository = new PagamentoRepository();

export async function updatePagamento({
  session,
  pagamento_props,
}: {
  session: string;
  pagamento_props: pagamento_props;
}) {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });
  await pagamento_repository.lancar_pagamento({ pagamento_props });
}

export async function findPagamentoPage({
  ...props
}: {
  session: string;
  page: number;
}): Promise<pagamento[]> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  return await pagamento_repository.consult_pagamento_by_uuid_auth_and_page({
    uuid_auth,
    page: props.page,
  });
}

export async function findUniquePagamento({
  ...props
}: {
  session: string;
  uuid_pagamento: string;
}) {
  await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });

  return await pagamento_repository.consult_pagamento_by_uuid_pagamento({
    uuid_pagamento: props.uuid_pagamento,
  });
}
