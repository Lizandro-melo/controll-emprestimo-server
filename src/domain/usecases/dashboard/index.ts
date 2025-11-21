import AuthRepository from "@/data/repositories/AuthRepository";
import EmprestimoRepository from "@/data/repositories/EmprestimoRepository";
import PagamentoRepository from "@/data/repositories/PagamentosRepository";
import { dashboard_props } from "@/domain/entities";
import { Prisma_auth, Prisma_logic } from "@/infra/db";
import { emprestimo, pagamento, Status_divida } from "@prisma/logic";
import { log } from "console";
import moment from "moment";

const auth_repository = new AuthRepository();
const pagamento_respository = new PagamentoRepository();
const emprestimo_respository = new EmprestimoRepository();

export default async function dashboard({
  ...props
}: {
  session: string;
}): Promise<dashboard_props> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });
  const emprestimos: emprestimo[] =
    await emprestimo_respository.consult_all_by_uuid({
      uuid_auth,
    });
  const pagamentos: pagamento[] =
    await pagamento_respository.consult_all_pagamento_by_uuid({ uuid_auth });

  const pagamentos_previsto_dia = pagamentos.filter(
    (p) => p.status != "PAGO" && moment(p.data_vencimento).isSame(moment(), "D")
  );
  const pagamentos_recebidos_dia = pagamentos.filter(
    (p) => p.status == "PAGO" && moment(p.data_pagamento).isSame(moment(), "d")
  );

  const pagamentos_previsto_mes = pagamentos.filter(
    (p) => p.status != "PAGO" && moment(p.data_vencimento).isSame(moment(), "M")
  );
  const pagamentos_recebidos_mes = pagamentos.filter(
    (p) => p.status == "PAGO" && moment(p.data_pagamento).isSame(moment(), "M")
  );

  const pagamentos_mes_props: {
    nome_cliente: string;
    valor_previsto: number;
    valor_pago?: number;
    nome_emprestimo: string;
    data_vencimento: Date;
    status: Status_divida;
    uuid_pagamento: string;
  }[] = [];
  const emprestimos_ativos: {
    nome_cliente: string;
    uuid_emprestimo: string;
    valor_emprestimo: number;
    valor_receber: number;
    valor_recebido: number;
    data_emprestimo: Date;
    data_final: Date;
  }[] = [];

  for (const p of pagamentos_previsto_mes) {
    const cliente = await Prisma_logic.cliente.findUnique({
      where: {
        uuid: p.uuid_cliente,
      },
    });
    const emprestimo = await Prisma_logic.emprestimo.findUnique({
      where: {
        uuid: p.uuid_emprestimo,
      },
    });
    pagamentos_mes_props.push({
      valor_previsto: p.valor_previsto,
      valor_pago: p.valor_pago ?? 0,
      nome_cliente: cliente?.nome_completo!,
      nome_emprestimo: emprestimo?.nome_emprestimo!,
      data_vencimento: p.data_vencimento,
      status: p.status,
      uuid_pagamento: p.uuid,
    });
  }

  for (const e of emprestimos.filter((e) => e.status !== "PAGO")) {
    const cliente = await Prisma_logic.cliente.findUnique({
      where: {
        uuid: e.uuid_cliente,
      },
    });

    emprestimos_ativos.push({
      nome_cliente: cliente?.nome_completo!,
      uuid_emprestimo: e.uuid,
      valor_emprestimo: e.valor_emprestimo,
      valor_receber: e.valor_receber,
      valor_recebido: e.valor_recebido ?? 0,
      data_emprestimo: e.data_emprestimo,
      data_final: e.data_final,
    });
  }

  const total_previsto_dia = pagamentos_previsto_dia.reduce(
    (acc, p) => acc + (p.valor_previsto || 0),
    0
  );
  const total_recebido_dia = pagamentos_recebidos_dia.reduce(
    (acc, p) => acc + (p.valor_pago || 0),
    0
  );

  const total_previsto_mes = pagamentos_previsto_mes.reduce(
    (acc, p) => acc + (p.valor_previsto || 0),
    0
  );
  const total_recebido_mes = pagamentos_recebidos_mes.reduce(
    (acc, p) => acc + (p.valor_pago || 0),
    0
  );

  return {
    total_previsto_dia,
    total_previsto_mes,
    total_recebido_dia,
    total_recebido_mes,
    pagamentos_mes: pagamentos_mes_props,
    emprestimos_ativos,
  };
}
