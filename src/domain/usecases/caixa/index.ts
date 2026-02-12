import AuthRepository from "@/data/repositories/AuthRepository";
import { caixa_props } from "@/domain/entities";
import { Prisma_logic } from "@/infra/db";
import crypto from "crypto";
import moment from "moment-timezone";

const auth_repository = new AuthRepository();

export default async function caixa({
  session,
  data_referencia,
}: {
  session: string;
  data_referencia?: string;
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

  let movimentos = await Prisma_logic.caixa_movimento.findMany({
    where: {
      uuid_operador: uuid_auth,
    },
  });

  if (movimentos.length === 0) {
    const movimentosPagamentos = pagamentos
      .filter((p) => p.status === "PAGO" && p.valor_pago && p.data_pagamento)
      .map((p) => ({
        uuid_operador: uuid_auth,
        referencia: `PAGAMENTO:${p.uuid}`,
        tipo: "ENTRADA" as const,
        valor: p.valor_pago || 0,
        data_movimento: p.data_pagamento!,
      }));

    const movimentosEmprestimos = emprestimos.map((e) => ({
      uuid_operador: uuid_auth,
      referencia: `EMPRESTIMO:${e.uuid}`,
      tipo: "SAIDA" as const,
      valor: e.valor_emprestimo || 0,
      data_movimento: e.data_emprestimo,
    }));

    if (movimentosPagamentos.length + movimentosEmprestimos.length > 0) {
      await Prisma_logic.caixa_movimento.createMany({
        data: [...movimentosPagamentos, ...movimentosEmprestimos],
        skipDuplicates: true,
      });
      movimentos = await Prisma_logic.caixa_movimento.findMany({
        where: {
          uuid_operador: uuid_auth,
        },
      });
    }
  }

  const baseDate = data_referencia
    ? moment.tz(data_referencia, "America/Sao_Paulo")
    : moment().tz("America/Sao_Paulo");

  if (!baseDate.isValid()) {
    throw new Error("Data de referencia invalida.");
  }

  const hoje = baseDate;
  const inicioHoje = hoje.clone().startOf("day");
  const inicioMes = hoje.clone().startOf("month");
  const inicioMesPassado = hoje.clone().subtract(1, "month").startOf("month");
  const fimMesPassado = hoje.clone().subtract(1, "month").endOf("month");
  const toLocal = (date: Date | string | null | undefined) =>
    date ? moment(date).tz("America/Sao_Paulo") : null;

  const caixa_atual = movimentos.reduce(
    (acc, m) => acc + (m.tipo === "ENTRADA" ? m.valor : -m.valor),
    0,
  );

  const caixa_passado = movimentos
    .filter((m) => {
      const data = toLocal(m.data_movimento);
      if (!data) return false;
      return data.isSame(inicioMesPassado, "month");
    })
    .reduce((acc, m) => acc + (m.tipo === "ENTRADA" ? m.valor : -m.valor), 0);

  const total_recebido = pagamentos.reduce(
    (acc, p) => acc + (p.valor_pago || 0),
    0,
  );

  const total_previsto_mes = pagamentos
    .filter((p) => toLocal(p.data_vencimento)?.isSame(hoje, "M"))
    .reduce((acc, p) => acc + (p.valor_previsto || 0), 0);

  const total_recebido_mes = pagamentos
    .filter((p) => {
      if (p.status !== "PAGO" || !p.data_pagamento) return false;
      return toLocal(p.data_pagamento)?.isSame(hoje, "M");
    })
    .reduce((acc, p) => acc + (p.valor_pago || 0), 0);

  const total_previsto_dia = pagamentos
    .filter(
      (p) =>
        p.status !== "PAGO" &&
        toLocal(p.data_vencimento)?.isSame(hoje, "D"),
    )
    .reduce((acc, p) => acc + (p.valor_previsto || 0), 0);

  const total_recebido_dia = movimentos
    .filter((m) => {
      if (m.tipo !== "ENTRADA") return false;
      if (!m.referencia?.startsWith("PAGAMENTO:")) return false;
      return toLocal(m.data_movimento)?.isSame(hoje, "D");
    })
    .reduce((acc, m) => acc + (m.valor || 0), 0);

  const total_emprestado_dia = emprestimos
    .filter((e) => toLocal(e.data_emprestimo)?.isSame(hoje, "D"))
    .reduce((acc, e) => acc + (e.valor_emprestimo || 0), 0);

  return {
    caixa_atual,
    caixa_passado,
    movimentos_count: movimentos.length,
    total_recebido,
    total_previsto_mes,
    total_recebido_mes,
    total_previsto_dia,
    total_recebido_dia,
    total_emprestado_dia,
  };
}

export async function setCaixaInicial({
  session,
  valor,
}: {
  session: string;
  valor: number | string;
}): Promise<void> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });

  const existeMovimento = await Prisma_logic.caixa_movimento.findFirst({
    where: {
      uuid_operador: uuid_auth,
    },
  });

  if (existeMovimento) {
    throw new Error("Caixa ja possui movimentacao.");
  }

  const valorNum = parseFloat(valor.toString().replace(",", "."));
  if (!Number.isFinite(valorNum) || valorNum < 0) {
    throw new Error("Valor de caixa invalido.");
  }

  await Prisma_logic.caixa_movimento.create({
    data: {
      uuid_operador: uuid_auth,
      referencia: "CAIXA_INICIAL",
      tipo: "ENTRADA",
      valor: valorNum,
      data_movimento: moment().tz("America/Sao_Paulo").toDate(),
    },
  });
}

export async function corrigirCaixa({
  session,
  valor,
}: {
  session: string;
  valor: number | string;
}): Promise<void> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });

  const valorNum = parseFloat(valor.toString().replace(",", "."));
  if (!Number.isFinite(valorNum) || valorNum < 0) {
    throw new Error("Valor de caixa invalido.");
  }

  const movimentos = await Prisma_logic.caixa_movimento.findMany({
    where: {
      uuid_operador: uuid_auth,
    },
  });

  const caixaAtual = movimentos.reduce(
    (acc, m) => acc + (m.tipo === "ENTRADA" ? m.valor : -m.valor),
    0,
  );

  const diferenca = valorNum - caixaAtual;
  if (diferenca === 0) return;

  const referencia = `AJUSTE_CAIXA:${crypto.randomUUID()}`;
  await Prisma_logic.caixa_movimento.create({
    data: {
      uuid_operador: uuid_auth,
      referencia,
      tipo: diferenca > 0 ? "ENTRADA" : "SAIDA",
      valor: Math.abs(diferenca),
      data_movimento: moment().tz("America/Sao_Paulo").toDate(),
    },
  });
}
