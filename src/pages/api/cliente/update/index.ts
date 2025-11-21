import type { NextApiRequest, NextApiResponse } from "next";
import { cors } from "../../_middlewares/cors";
import { create_cliente, response } from "@/domain/entities";
import { createCliente } from "@/domain/usecases/cliente";

export default async function clienteApiUpdate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "PUT")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const create_cliente: create_cliente = req.body;
   
    res.status(200).json({ m: "Cliente criado com sucesso!", type: "sucess" });
  } catch (e:any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
