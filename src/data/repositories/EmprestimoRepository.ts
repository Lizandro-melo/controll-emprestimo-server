import IEmprestimoRepository from "@/domain/repositories/IEmprestimoRepository";
import { Prisma_logic } from "@/infra/db";
import { emprestimo } from "@prisma/logic";
import { log } from "console";
import moment from "moment";

export default class EmprestimoRepository implements IEmprestimoRepository {
  async consult_all_by_uuid({
    uuid_auth,
  }: {
    uuid_auth: string;
  }): Promise<emprestimo[]> {
    return await Prisma_logic.emprestimo.findMany({
      where: {
        uuid_operador: uuid_auth,
      },
    });
  }
  async create_emprestimo({ ...props }: emprestimo): Promise<void> {
    await Prisma_logic.$transaction(async (prisma) => {
      const emprestimo = await prisma.emprestimo.create({
        data: {
          ...props,
          valor_emprestimo: parseFloat(
            (props.valor_emprestimo ?? 0).toString()
          ),
          valor_receber: parseFloat((props.valor_receber ?? 0).toString()),
          data_final: moment(props.data_final).tz("America/Sao_Paulo").toDate(),
          data_emprestimo: moment(props.data_emprestimo)
            .tz("America/Sao_Paulo")
            .toDate(),
        },
      });

      switch (props.tipo) {
        case "MENSAL":
          const diferenca_mes = moment(props.data_final).diff(
            moment(props.data_emprestimo),
            "M"
          );

          const valor_previsto = emprestimo.valor_receber / diferenca_mes;

          for (let i = 1; i < diferenca_mes; i++) {
            const vencimento = moment(props.data_emprestimo)
              .tz("America/Sao_Paulo")
              .add(i, "months")
              .toDate();

            await prisma.pagamento.create({
              data: {
                uuid_emprestimo: emprestimo.uuid,
                data_vencimento: vencimento,
                valor_previsto: valor_previsto,
                uuid_operador: props.uuid_operador,
                uuid_cliente: props.uuid_cliente,
              },
            });
          }
          break;
        default:
          throw new Error("Plano de pagamento inválido.");
      }
    });
  }
}
