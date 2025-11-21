import { update_pagamento_props } from "@/domain/entities";
import IPagamentoRepository from "@/domain/repositories/IPagamentoRepository";
import { Prisma_logic } from "@/infra/db";
import { pagamento } from "@prisma/logic/client";
import moment from "moment";

export default class PagamentoRepository implements IPagamentoRepository {
  async consult_pagamento_by_uuid_auth_and_page({
    ...props
  }: {
    uuid_auth: string;
    page: number;
  }): Promise<pagamento[]> {
    const skips = (props.page - 1) * 10;

    return await Prisma_logic.pagamento.findMany({
      where: {
        uuid_operador: props.uuid_auth,
      },
      take: 10,
      skip: skips,
      orderBy: {
        data_vencimento: "asc",
      },
    });
  }
  async consult_all_pagamento_by_uuid({
    ...props
  }: {
    uuid_auth: string;
  }): Promise<pagamento[]> {
    return await Prisma_logic.pagamento.findMany({
      where: {
        uuid_operador: props.uuid_auth,
      },
    });
  }
  async lancar_pagamento({
    update_pagamento_props,
  }: {
    update_pagamento_props: update_pagamento_props;
  }): Promise<void> {
    await Prisma_logic.$transaction(
      async (prisma) => {
        await prisma.pagamento.update({
          where: {
            uuid: update_pagamento_props.uuid_pagamento,
          },
          data: {
            comprovante: update_pagamento_props.comprovante,
            data_pagamento: moment(
              update_pagamento_props.data_pagamento
            ).toDate(),
            observacao: update_pagamento_props.observacao,
            valor_pago: parseFloat(
              update_pagamento_props.valor_pago.toString().replace(",", ".")
            ),
            tipo_pagamento: update_pagamento_props.tipo_pagamento,
            status: "PAGO",
          },
        });
        const pagamentos_pagos = await prisma.pagamento.findMany({
          where: {
            uuid_emprestimo: update_pagamento_props.uuid_emprestimo,
            status: "PAGO",
          },
        });

        const valor_recebido = pagamentos_pagos.reduce(
          (acc, p) => acc + (p.valor_pago || 0),
          0
        );
        const emprestimo = await prisma.emprestimo.findUnique({
          where: {
            uuid: update_pagamento_props.uuid_emprestimo,
          },
        });
        await prisma.emprestimo.update({
          where: {
            uuid: update_pagamento_props.uuid_emprestimo,
          },
          data: {
            valor_recebido: valor_recebido,
            status:
              emprestimo?.valor_receber! < valor_recebido ? "PAGO" : "PENDENTE",
          },
        });
      },
      {
        maxWait: 10000,
      }
    );
  }
}
