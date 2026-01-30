import AuthRepository from "@/data/repositories/AuthRepository";
import { caixa_props } from "@/domain/entities";
import { Prisma_logic } from "@/infra/db";
import { log } from "console";
import moment from "moment-timezone";

const auth_repository = new AuthRepository();

export default async function caixa({
  session,
}: {
  session: string;
}): Promise<caixa_props> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });

  const pagamentos = await Prisma_logic.pagamento.findMany({
    where: {
      uuid_operador: uuid_auth,
      delete: false,
    },
  });


  const emprestimos = await Prisma_logic.emprestimo.findMany({
    where: {
      uuid_operador: uuid_auth,
      delete: false,
    },
  });

  const hoje = moment().tz("America/Sao_Paulo");
  const inicioDia = hoje.clone().startOf("day");
  const fimDia = hoje.clone().endOf("day");
  const inicioMes = hoje.clone().startOf("month");
  const fimMes = hoje.clone().endOf("month");

  const total_recebido = pagamentos.reduce(
    (acc, p) => acc + (p.valor_pago || 0),
    0,
  );

  const total_previsto_mes = pagamentos
    .filter((p) =>
      moment.tz(p.data_vencimento, "America/Sao_Paulo").isSame(hoje, "M"),
    )
    .reduce((acc, p) => acc + (p.valor_previsto || 0), 0);

  const total_recebido_mes = pagamentos
    .filter((p) => {
      if (p.status !== "PAGO" || !p.data_pagamento) return false;
      return moment.tz(p.data_pagamento, "America/Sao_Paulo").isSame(hoje, "M");
    })
    .reduce((acc, p) => acc + (p.valor_pago || 0), 0);

  const total_previsto_dia = pagamentos
    .filter(
      (p) =>
        p.status !== "PAGO" &&
        moment.tz(p.data_vencimento, "America/Sao_Paulo").isSame(hoje, "D"),
    )
    .reduce((acc, p) => acc + (p.valor_previsto || 0), 0);

  const total_recebido_dia = pagamentos
    .filter((p) => {
      if (p.status !== "PAGO" || !p.data_pagamento) return false;
      return moment.tz(p.data_pagamento, "America/Sao_Paulo").isSame(hoje, "D");
    })
    .reduce((acc, p) => acc + (p.valor_pago || 0), 0);

  const total_emprestado_dia = emprestimos
    .filter((e) =>
      moment.tz(e.data_emprestimo, "America/Sao_Paulo").isSame(hoje, "D"),
    )
    .reduce((acc, e) => acc + (e.valor_emprestimo || 0), 0);

  return {
    total_recebido,
    total_previsto_mes,
    total_recebido_mes,
    total_previsto_dia,
    total_recebido_dia,
    total_emprestado_dia,
  };
}
