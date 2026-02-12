import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { response } from "@/domain/entities";
import { setCaixaInicial } from "@/domain/usecases/caixa";
import cors from "@/presentation/lib/middlewares/cors";

export default async function CaixaInicialApi(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (cors(req, res, "POST")) return;

  const schema = z.object({
    valor: z.union([z.number(), z.string()]),
  });

  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const body = schema.parse(req.body);
    await setCaixaInicial({ session: session!, valor: body.valor });
    res.status(200).json({ result: true, type: "sucess" });
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
