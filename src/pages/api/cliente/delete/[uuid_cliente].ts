import type { NextApiRequest, NextApiResponse } from "next";

import { cliente_props, create_cliente, response } from "@/domain/entities";
import {
  createCliente,
  deleteCliente,
  findCliente,
} from "@/domain/usecases/cliente";
import cors from "@/presentation/lib/middlewares/cors";

export default async function clienteApiFind(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "DELETE")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const uuid_cliente: string = req.query.uuid_cliente as string;
    await deleteCliente({
      session: session!,
      uuid_cliente: uuid_cliente,
    });
    res.status(200).json({
      m: "Cliente e todos os seus registros deletado com sucesso!",
      type: "sucess",
    });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
