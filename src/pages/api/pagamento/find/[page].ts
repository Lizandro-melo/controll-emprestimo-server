import type { NextApiRequest, NextApiResponse } from "next";
import { cors } from "../../_middlewares/cors";
import { response, update_pagamento_props } from "@/domain/entities";

import {
  findPagamentoPage,
  updatePagamento,
} from "@/domain/usecases/pagamento";

export default async function pagamentoApiFindPage(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const page = req.query.page as string;
    const pagamentos = await findPagamentoPage({
      session: session!,
      page: parseInt(page),
    });
    res.status(200).json({ result: pagamentos, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
