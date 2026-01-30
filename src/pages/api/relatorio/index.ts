import type { NextApiRequest, NextApiResponse } from "next";

import { response } from "@/domain/entities";
import relatorio from "@/domain/usecases/relatorio";
import cors from "@/presentation/lib/middlewares/cors";

export default async function RelatorioApi(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const { data_inicio, data_final } = req.query;

    if (!data_inicio || !data_final) {
      res.status(400).json({
        m: "Informe data_inicio e data_final.",
        type: "error",
      });
      return;
    }

    const relatorio_props = await relatorio({
      session: session!,
      data_inicio: String(data_inicio),
      data_final: String(data_final),
    });
    res.status(200).json({ result: relatorio_props, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
