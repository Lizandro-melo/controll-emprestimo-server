import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response, pagamento_props } from "@/domain/entities";

import {
  findPagamentoPage,
  updatePagamento,
} from "@/domain/usecases/pagamento";
import { findClientePage } from "@/domain/usecases/cliente";

export default async function pagamentoApiFindPage(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const page = req.query.page as string;
    const clientes = await findClientePage({
      session: session!,
      page: parseInt(page),
    });
    res.status(200).json({ result: clientes, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
