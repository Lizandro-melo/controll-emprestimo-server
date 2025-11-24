import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { cliente_props, response } from "@/domain/entities";
import { updateCliente } from "@/domain/usecases/cliente";

export default async function clienteApiUpdate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "PUT")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const cliente_props: cliente_props = req.body;
    await updateCliente({ session: session!, cliente_props: cliente_props });
    res
      .status(200)
      .json({ m: "Cliente atualizado com sucesso!", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
