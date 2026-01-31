import {
  create_emprestimo_props,
  emprestimo_find_props,
  update_emprestimo_props,
} from "@/domain/entities";
import IEmprestimoRepository from "@/domain/repositories/IEmprestimoRepository";
import { Prisma_logic } from "@/infra/db";
import { emprestimo, pagamento } from "@prisma/logic";
import { log } from "console";
import moment from "moment";

export default class EmprestimoRepository implements IEmprestimoRepository {
  private getParcelas({
    tipo,
    data_emprestimo,
    data_final,
  }: {
    tipo: emprestimo["tipo"];
    data_emprestimo: Date;
    data_final: Date;
  }): { quantidade: number; vencimentos: Date[] } {
    const inicio = moment(data_emprestimo).tz("America/Sao_Paulo");
    const fim = moment(data_final).tz("America/Sao_Paulo");

    if (fim.isBefore(inicio)) {
      throw new Error("Período inválido para gerar parcelas.");
    }

    let quantidade = 0;
    let unidade: moment.unitOfTime.DurationConstructor = "days";
    let passo = 1;

    switch (tipo) {
      case "DIARIO": {
        const diffDias = fim.diff(inicio, "d", true);
        quantidade = Math.max(1, Math.ceil(diffDias / 1));
        unidade = "days";
        passo = 1;
        break;
      }
      case "SEMANAL": {
        const diffDias = fim.diff(inicio, "d", true);
        quantidade = Math.max(1, Math.ceil(diffDias / 7));
        unidade = "days";
        passo = 7;
        break;
      }
      case "QUINZENAL": {
        const diffDias = fim.diff(inicio, "d", true);
        quantidade = Math.max(1, Math.ceil(diffDias / 15));
        unidade = "days";
        passo = 15;
        break;
      }
      case "MENSAL": {
        const diffMeses = fim.diff(inicio, "M", true);
        quantidade = Math.max(1, Math.ceil(diffMeses));
        unidade = "months";
        passo = 1;
        break;
      }
      default:
        throw new Error("Plano de pagamento inválido.");
    }

    const vencimentos: Date[] = [];
    for (let i = 1; i < quantidade; i++) {
      vencimentos.push(
        inicio
          .clone()
          .add(i * passo, unidade)
          .toDate(),
      );
    }
    vencimentos.push(fim.toDate());

    return { quantidade, vencimentos };
  }

  private buildPagamentosData({
    uuid_emprestimo,
    uuid_operador,
    uuid_cliente,
    vencimentos,
    valor_previsto,
  }: {
    uuid_emprestimo: string;
    uuid_operador: string;
    uuid_cliente: string;
    vencimentos: Date[];
    valor_previsto: number;
  }) {
    return vencimentos.map((vencimento) => ({
      uuid_emprestimo,
      data_vencimento: vencimento,
      valor_previsto,
      uuid_operador,
      uuid_cliente,
    }));
  }

  private getParcelasByQuantidade({
    tipo,
    data_emprestimo,
    quantidade,
  }: {
    tipo: emprestimo["tipo"];
    data_emprestimo: Date;
    quantidade: number;
  }): { vencimentos: Date[]; data_final: Date } {
    if (!quantidade || quantidade < 1) {
      throw new Error("Quantidade de parcelas invalida.");
    }

    const inicio = moment(data_emprestimo).tz("America/Sao_Paulo");
    let unidade: moment.unitOfTime.DurationConstructor = "days";
    let passo = 1;

    switch (tipo) {
      case "DIARIO":
        unidade = "days";
        passo = 1;
        break;
      case "SEMANAL":
        unidade = "days";
        passo = 7;
        break;
      case "QUINZENAL":
        unidade = "days";
        passo = 15;
        break;
      case "MENSAL":
        unidade = "months";
        passo = 1;
        break;
      default:
        throw new Error("Plano de pagamento invÃ¡lido.");
    }

    const vencimentos: Date[] = [];
    for (let i = 1; i < quantidade+1; i++) {
      vencimentos.push(inicio.clone().add(i * passo, unidade).toDate());
    }

    return {
      vencimentos,
      data_final: vencimentos[vencimentos.length - 1],
    };
  }
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
    emprestimo_props: update_emprestimo_props;
  }): Promise<void> {
    await Prisma_logic.$transaction(
      async (prisma) => {
      const emprestimo_consult = await prisma.emprestimo.findUnique({
        where: {
          uuid: props.emprestimo_props.uuid,
          uuid_operador: props.uuid_auth,
        },
      });

      const { quantidade_parcelas, ...emprestimoBase } = props.emprestimo_props;
      const dataEmprestimo = moment(emprestimoBase.data_emprestimo)
        .tz("America/Sao_Paulo")
        .toDate();
      const quantidade = quantidade_parcelas
        ? Number(quantidade_parcelas)
        : undefined;

      let dataFinalToUse = emprestimo_consult?.data_final;
      let vencimentos: Date[] | null = null;
      let quantidadeFinal = quantidade;

      if (quantidade) {
        const parcelasInfo = this.getParcelasByQuantidade({
          tipo: emprestimoBase.tipo,
          data_emprestimo: dataEmprestimo,
          quantidade,
        });
        dataFinalToUse = parcelasInfo.data_final;
        vencimentos = parcelasInfo.vencimentos;
      }

      const consulta =
        !!quantidade ||
        !moment(emprestimo_consult?.data_emprestimo).isSame(dataEmprestimo) ||
        emprestimo_consult?.tipo !== emprestimoBase.tipo ||
        emprestimo_consult?.valor_receber !==
          parseFloat((emprestimoBase.valor_receber ?? 0).toString());

      const emprestimo = await prisma.emprestimo.update({
        where: {
          uuid: emprestimoBase.uuid,
          uuid_operador: props.uuid_auth,
        },
        data: {
          ...emprestimoBase,
          valor_emprestimo: parseFloat(
            (emprestimoBase.valor_emprestimo ?? 0).toString()
          ),
          valor_receber: parseFloat(
            (emprestimoBase.valor_receber ?? 0).toString()
          ),
          valor_recebido: consulta ? 0 : emprestimo_consult.valor_recebido,
          data_final: dataFinalToUse,
          data_emprestimo: dataEmprestimo,
        },
        omit: {
          valor_recebido: true,
        },
      });

      if (consulta) {
        if (!vencimentos) {
          const parcelasInfo = this.getParcelas({
            tipo: emprestimo.tipo,
            data_emprestimo: emprestimo.data_emprestimo,
            data_final: emprestimo.data_final,
          });
          vencimentos = parcelasInfo.vencimentos;
          quantidadeFinal = parcelasInfo.quantidade;
        }

        const valor_previsto =
          emprestimo.valor_receber / (quantidadeFinal || vencimentos.length);

        await prisma.pagamento.deleteMany({
          where: {
            uuid_emprestimo: emprestimo.uuid,
          },
        });

        const pagamentosData = this.buildPagamentosData({
          uuid_emprestimo: emprestimo.uuid,
          uuid_operador: emprestimo.uuid_operador,
          uuid_cliente: emprestimo.uuid_cliente,
          vencimentos: vencimentos ?? [],
          valor_previsto,
        });

        if (pagamentosData.length > 0) {
          await prisma.pagamento.createMany({
            data: pagamentosData,
          });
        }
      }
      },
      {
        maxWait: 10000,
        timeout: 15000,
      },
    );
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
      orderBy: {
        data_vencimento: "asc",
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
  async create_emprestimo({ ...props }: create_emprestimo_props): Promise<void> {
    await Prisma_logic.$transaction(
      async (prisma) => {
      const { quantidade_parcelas, ...emprestimoBase } = props;
      const quantidade = Number(quantidade_parcelas);
      const dataEmprestimo = moment(emprestimoBase.data_emprestimo)
        .tz("America/Sao_Paulo")
        .toDate();
      const { vencimentos, data_final } = this.getParcelasByQuantidade({
        tipo: emprestimoBase.tipo,
        data_emprestimo: dataEmprestimo,
        quantidade,
      });

      const emprestimo = await prisma.emprestimo.create({
        data: {
          ...emprestimoBase,
          valor_emprestimo: parseFloat(
            (emprestimoBase.valor_emprestimo ?? 0).toString(),
          ),
          valor_receber: parseFloat((emprestimoBase.valor_receber ?? 0).toString()),
          data_final,
          data_emprestimo: dataEmprestimo,
        },
      });

      const valor_previsto = emprestimo.valor_receber / quantidade;

      const pagamentosData = this.buildPagamentosData({
        uuid_emprestimo: emprestimo.uuid,
        uuid_operador: props.uuid_operador,
        uuid_cliente: props.uuid_cliente,
        vencimentos,
        valor_previsto,
      });

      if (pagamentosData.length > 0) {
        await prisma.pagamento.createMany({
          data: pagamentosData,
        });
      }
      },
      {
        maxWait: 10000,
        timeout: 15000,
      },
    );
  }
}
