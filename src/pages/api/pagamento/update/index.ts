import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response, pagamento_props } from "@/domain/entities";

import { updatePagamento } from "@/domain/usecases/pagamento";
import { log } from "console";

export default async function pagamentoApiUpdate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "PUT")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const update_pagamento: pagamento_props = req.body;
    await updatePagamento({
      session: session!,
      pagamento_props: update_pagamento,
    });
    res.status(200).json({ m: "Pagamento lançado!", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
