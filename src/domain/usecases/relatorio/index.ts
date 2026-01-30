import AuthRepository from "@/data/repositories/AuthRepository";
import { relatorio_props } from "@/domain/entities";
import { Prisma_logic } from "@/infra/db";
import moment from "moment-timezone";

const auth_repository = new AuthRepository();

export default async function relatorio({
  session,
  data_inicio,
  data_final,
}: {
  session: string;
  data_inicio: string;
  data_final: string;
}): Promise<relatorio_props> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session,
  });

  const inicio = moment.tz(data_inicio, "America/Sao_Paulo").startOf("day");
  const fim = moment.tz(data_final, "America/Sao_Paulo").endOf("day");

  if (!inicio.isValid() || !fim.isValid()) {
    throw new Error("Datas informadas sÃ£o invÃ¡lidas.");
  }

  const pagamentosPrevistos = await Prisma_logic.pagamento.findMany({
    where: {
      uuid_operador: uuid_auth,
      delete: false,
      data_vencimento: {
        gte: inicio.toDate(),
        lte: fim.toDate(),
      },
    },
  });

  const pagamentosRecebidos = await Prisma_logic.pagamento.findMany({
    where: {
      uuid_operador: uuid_auth,
      delete: false,
      status: "PAGO",
      data_pagamento: {
        gte: inicio.toDate(),
        lte: fim.toDate(),
      },
    },
  });

  const total_previsto = pagamentosPrevistos.reduce(
    (acc, p) => acc + (p.valor_previsto || 0),
    0
  );

  const total_recebido = pagamentosRecebidos.reduce(
    (acc, p) => acc + (p.valor_pago || 0),
    0
  );

  return {
    total_previsto,
    total_recebido,
  };
}
