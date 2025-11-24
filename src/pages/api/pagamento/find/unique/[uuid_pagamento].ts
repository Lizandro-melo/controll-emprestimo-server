import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response, pagamento_props } from "@/domain/entities";

import {
  findPagamentoPage,
  findUniquePagamento,
  updatePagamento,
} from "@/domain/usecases/pagamento";

export default async function pagamentoApiFindPage(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const uuid_pagamento = req.query.uuid_pagamento as string;
    const pagamento = await findUniquePagamento({
      session: session!,
      uuid_pagamento: uuid_pagamento,
    });
    res.status(200).json({ result: pagamento, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
