import AuthRepository from "@/data/repositories/AuthRepository";
import { dashboard_props } from "@/domain/entities";
import { Prisma_logic } from "@/infra/db";

const auth_repository = new AuthRepository();

export default async function dashboard({
  ...props
}: {
  session: string;
}): Promise<dashboard_props> {
  const { uuid_auth } = await auth_repository.consult_uuid_auth_by_session({
    session: props.session,
  });

  return {
    clientes_pendentes: await Prisma_logic.cliente.findMany({
      where: {
        uuid_operador: uuid_auth,
        delete: false,
        emprestimos: {
          some: {
            delete: false,
            status: {
              not: "PAGO",
            },
          },
        },
      },
      orderBy: {
        nome_completo: "asc",
      },
    }),
  };
}
