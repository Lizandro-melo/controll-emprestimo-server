import type { NextApiRequest, NextApiResponse } from "next";

import { response } from "@/domain/entities";
import caixa from "@/domain/usecases/caixa";
import cors from "@/presentation/lib/middlewares/cors";

export default async function CaixaApi(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const { data_referencia } = req.query;
    const caixa_props = await caixa({
      session: session!,
      data_referencia: data_referencia ? String(data_referencia) : undefined,
    });
    res.status(200).json({ result: caixa_props, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
