import { emprestimo_find_props } from "@/domain/entities";
import IEmprestimoRepository from "@/domain/repositories/IEmprestimoRepository";
import { Prisma_logic } from "@/infra/db";
import { emprestimo, pagamento } from "@prisma/logic";
import { log } from "console";
import moment from "moment";

export default class EmprestimoRepository implements IEmprestimoRepository {
  async delete_emprestimo({
    ...props
  }: {
    uuid_auth: string;
    uuid_emprestimo: string;
  }): Promise<void> {
    await Prisma_logic.$transaction(async (prisma) => {
      const emprestimo = await prisma.emprestimo.update({
        where: {
          uuid_operador: props.uuid_auth,
          uuid: props.uuid_emprestimo,
        },
        data: {
          delete: true,
        },
      });

      await prisma.pagamento.updateMany({
        where: {
          uuid_emprestimo: emprestimo.uuid,
        },
        data: {
          delete: true,
        },
      });
    });
  }
  async update_emprestimo({
    ...props
  }: {
    uuid_auth: string;
    emprestimo_props: emprestimo;
  }): Promise<void> {
    await Prisma_logic.$transaction(async (prisma) => {
      const emprestimo_consult = await prisma.emprestimo.findUnique({
        where: {
          uuid: props.emprestimo_props.uuid,
          uuid_operador: props.uuid_auth,
        },
      });

      const consulta =
        !moment(emprestimo_consult?.data_emprestimo).isSame(
          props.emprestimo_props.data_emprestimo
        ) ||
        !moment(emprestimo_consult?.data_final).isSame(
          props.emprestimo_props.data_final
        ) ||
        emprestimo_consult?.valor_receber !==
          parseFloat((props.emprestimo_props.valor_receber ?? 0).toString());

      const emprestimo = await prisma.emprestimo.update({
        where: {
          uuid: props.emprestimo_props.uuid,
          uuid_operador: props.uuid_auth,
        },
        data: {
          ...props.emprestimo_props,
          valor_emprestimo: parseFloat(
            (props.emprestimo_props.valor_emprestimo ?? 0).toString()
          ),
          valor_receber: parseFloat(
            (props.emprestimo_props.valor_receber ?? 0).toString()
          ),
          valor_recebido: consulta ? 0 : emprestimo_consult.valor_recebido,
          data_final: moment(props.emprestimo_props.data_final)
            .tz("America/Sao_Paulo")
            .toDate(),
          data_emprestimo: moment(props.emprestimo_props.data_emprestimo)
            .tz("America/Sao_Paulo")
            .toDate(),
        },
        omit: {
          valor_recebido: true,
        },
      });

      if (consulta) {
        switch (emprestimo.tipo) {
          case "MENSAL":
            const diferenca_mes = moment(emprestimo.data_final).diff(
              moment(emprestimo.data_emprestimo),
              "M"
            );

            const valor_previsto = emprestimo.valor_receber / diferenca_mes;

            await prisma.pagamento.deleteMany({
              where: {
                uuid_emprestimo: emprestimo.uuid,
              },
            });

            for (let i = 1; i < diferenca_mes; i++) {
              const vencimento = moment(emprestimo.data_emprestimo)
                .tz("America/Sao_Paulo")
                .add(i, "months")
                .toDate();

              await prisma.pagamento.create({
                data: {
                  uuid_emprestimo: emprestimo.uuid,
                  data_vencimento: vencimento,
                  valor_previsto: valor_previsto,
                  uuid_operador: emprestimo.uuid_operador,
                  uuid_cliente: emprestimo.uuid_cliente,
                },
              });
            }
            break;
          default:
            throw new Error("Plano de pagamento inválido.");
        }
      }
    });
  }
  async consult_emprestimo_by_uuid_emprestimo({
    ...props
  }: {
    uuid_auth: string;
    uuid_emprestimo: string;
  }): Promise<emprestimo_find_props> {
    const emprestimo = await Prisma_logic.emprestimo.findUnique({
      where: {
        uuid: props.uuid_emprestimo,
        uuid_operador: props.uuid_auth,
        delete: false,
      },
    });

    const pagamentos: pagamento[] = await Prisma_logic.pagamento.findMany({
      where: {
        uuid_emprestimo: emprestimo?.uuid,
      },
    });

    return {
      emprestimo: emprestimo!,
      pagamentos: pagamentos,
    };
  }
  async consult_emprestimo_by_uuid_auth_page({
    ...props
  }: {
    uuid_auth: string;
    page: number;
  }): Promise<emprestimo[]> {
    const skips = (props.page - 1) * 10;

    return await Prisma_logic.emprestimo.findMany({
      where: {
        uuid_operador: props.uuid_auth,
        delete: false,
      },
      take: 10,
      skip: skips,
      orderBy: {
        data_emprestimo: "asc",
      },
    });
  }
  async consult_all_by_uuid({
    uuid_auth,
  }: {
    uuid_auth: string;
  }): Promise<emprestimo[]> {
    return await Prisma_logic.emprestimo.findMany({
      where: {
        uuid_operador: uuid_auth,
        delete: false,
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
