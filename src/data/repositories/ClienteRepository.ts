import { cliente_props, create_cliente, find_cliente } from "@/domain/entities";
import IClienteRepository from "@/domain/repositories/IClienteRepository";
import { Prisma_auth, Prisma_logic } from "@/infra/db";
import { log } from "console";
import moment from "moment-timezone";

export default class ClienteRepository implements IClienteRepository {
  async update_cliente_by_cliente_props({
    ...props
  }: {
    cliente_props: cliente_props;
    uuid_auth: string;
  }): Promise<void> {
    try {
      await Prisma_logic.$transaction(async (prisma) => {
        await prisma.cliente.update({
          where: {
            uuid: props.cliente_props.cliente.uuid,
            uuid_operador: props.uuid_auth,
          },
          data: {
            ...props.cliente_props.cliente,
            data_nascimento: props.cliente_props.cliente.data_nascimento
              ? moment(props.cliente_props.cliente.data_nascimento).toDate()
              : null,
          },
          omit: {
            num_cpf: true,
          },
        });
        await prisma.celular_cliente.deleteMany({
          where: { uuid_cliente: props.cliente_props.cliente.uuid },
        });

        await prisma.celular_cliente.createMany({
          data: props.cliente_props.celulares
            .filter((c) => c.status)
            .map(({ id, ...rest }) => rest),
        });

        await prisma.endereco_cliente.deleteMany({
          where: { uuid_cliente: props.cliente_props.cliente.uuid },
        });

        await prisma.endereco_cliente.createMany({
          data: props.cliente_props.enderecos
            .filter((c) => c.status)
            .map(({ id, ...rest }) => rest),
        });
      });
    } catch {
      throw new Error("Não foi possivel atuaizar as informações desse cliente");
    }
  }
  async consult_cliente_by_uuid_cliente({
    ...props
  }: {
    uuid_cliente: string;
    uuid_auth: string;
  }): Promise<cliente_props> {
    const cliente = await Prisma_logic.cliente.findUnique({
      where: {
        uuid: props.uuid_cliente,
        uuid_operador: props.uuid_auth,
      },
    });
    const celulares = await Prisma_logic.celular_cliente.findMany({
      where: {
        uuid_cliente: cliente?.uuid,
        status: true,
      },
    });
    const enderecos = await Prisma_logic.endereco_cliente.findMany({
      where: {
        uuid_cliente: cliente?.uuid,
      },
    });
    return {
      cliente: {
        ...cliente!,
        data_nascimento: moment(cliente?.data_nascimento).toISOString(),
      },
      celulares: celulares ?? [],
      enderecos: enderecos ?? [],
    };
  }
  async consult_cpf_cliente_by_uuid_cliente({
    num_cpf,
    uuid_auth,
  }: {
    num_cpf: string;
    uuid_auth: string;
  }): Promise<void> {
    const cliente = await Prisma_logic.cliente.findFirst({
      where: {
        num_cpf: num_cpf,
        uuid_operador: uuid_auth,
      },
    });
    if (cliente)
      throw new Error("Você já tem cadastrado um cliente com esse CPF");
  }

  async register_cliente({
    uuid_auth,
    create_cliente,
  }: {
    uuid_auth: string;
    create_cliente: create_cliente;
  }): Promise<void> {
    await Prisma_logic.$transaction(async () => {
      const auth = await Prisma_auth.auth.create({
        data: {
          role: "CLIENTE",
        },
      });
      await Prisma_logic.cliente.create({
        data: {
          uuid: auth.uuid,
          nome_completo: create_cliente.nome_completo,
          num_cpf: create_cliente.num_cpf,
          observacao: create_cliente.observacao,
          uuid_operador: uuid_auth,
        },
      });
      await Prisma_logic.celular_cliente.create({
        data: {
          num_cel: create_cliente.num_cel,
          uuid_cliente: auth.uuid,
        },
      });
      await Prisma_logic.endereco_cliente.create({
        data: {
          codigo_postal: create_cliente.codigo_postal,
          numero_residencial: create_cliente.numero_residencial,
          uuid_cliente: auth.uuid,
        },
      });
    });
  }
}
