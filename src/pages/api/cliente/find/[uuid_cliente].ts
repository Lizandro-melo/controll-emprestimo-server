import type { NextApiRequest, NextApiResponse } from "next";
import { cors } from "../../_middlewares/cors";
import { cliente_props, create_cliente, response } from "@/domain/entities";
import { createCliente, findCliente } from "@/domain/usecases/cliente";

export default async function clienteApiFind(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const uuid_cliente: string = req.query.uuid_cliente as string;
    const cliente: cliente_props = await findCliente({
      session: session!,
      uuid_cliente: uuid_cliente,
    });
    res.status(200).json({ result: cliente, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
