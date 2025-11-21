import type { NextApiRequest, NextApiResponse } from "next";
import { cors } from "../../_middlewares/cors";
import {
  response,
  update_pagamento_props,
} from "@/domain/entities";

import { updatePagamento } from "@/domain/usecases/pagamento";

export default async function pagamentoApiUpdate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "PUT")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const update_pagamento: update_pagamento_props = req.body;
    await updatePagamento({
      session: session!,
      update_pagamento_props: update_pagamento,
    });
    res.status(200).json({ m: "Pagamento lançado!", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
