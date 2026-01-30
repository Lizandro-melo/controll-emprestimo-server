import { pagamento_props } from "@/domain/entities";
import IPagamentoRepository from "@/domain/repositories/IPagamentoRepository";
import { Prisma_logic } from "@/infra/db";
import { pagamento, Tipo_pagamento } from "@prisma/logic/client";
import moment from "moment";

export default class PagamentoRepository implements IPagamentoRepository {
  async consult_pagamento_by_uuid_pagamento({
    ...props
  }: {
    uuid_pagamento: string;
  }): Promise<pagamento_props> {
    const pagamento = await Prisma_logic.pagamento.findUnique({
      where: {
        uuid: props.uuid_pagamento,
        delete: false,
      },
    });
    return {
      data_pagamento: pagamento?.data_pagamento?.toISOString() ?? "",
      observacao: pagamento?.observacao ?? "",
      tipo_pagamento: pagamento?.tipo_pagamento ?? "",
      uuid_emprestimo: pagamento?.uuid_emprestimo ?? "",
      uuid_pagamento: pagamento?.uuid ?? "",
      valor_pago: pagamento?.valor_pago ?? null,
      comprovante: pagamento?.comprovante
        ? Buffer.from(pagamento.comprovante).toString("base64")
        : null,
    };
  }
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
        delete: false,
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
        delete: false,
      },
    });
  }
  async lancar_pagamento({
    pagamento_props,
  }: {
    pagamento_props: pagamento_props;
  }): Promise<void> {
    await Prisma_logic.$transaction(
      async (prisma) => {
        await prisma.pagamento.update({
          where: {
            uuid: pagamento_props.uuid_pagamento,
          },
          data: {
            comprovante: pagamento_props.comprovante
              ? Buffer.from(pagamento_props.comprovante, "base64")
              : undefined,
            data_pagamento: moment(pagamento_props.data_pagamento).toDate(),
            observacao: pagamento_props.observacao,
            valor_pago: parseFloat(
              pagamento_props.valor_pago!.toString().replace(",", ".")
            ),
            tipo_pagamento: pagamento_props.tipo_pagamento as Tipo_pagamento,
            status: "PAGO",
          },
        });
        const pagamentos_pagos = await prisma.pagamento.findMany({
          where: {
            uuid_emprestimo: pagamento_props.uuid_emprestimo,
            status: "PAGO",
          },
        });

        const valor_recebido = pagamentos_pagos.reduce(
          (acc, p) => acc + (p.valor_pago || 0),
          0
        );
        const emprestimo = await prisma.emprestimo.findUnique({
          where: {
            uuid: pagamento_props.uuid_emprestimo,
          },
        });
        await prisma.emprestimo.update({
          where: {
            uuid: pagamento_props.uuid_emprestimo,
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
