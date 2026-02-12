import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { response } from "@/domain/entities";
import { alterar_senha } from "@/domain/usecases/auth";
import cors from "@/presentation/lib/middlewares/cors";

export default async function OperadorSenhaApi(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (cors(req, res, "PUT")) return;

  const schema = z.object({
    senha_atual: z.string().min(1),
    senha_nova: z.string().min(1),
    senha_confirmacao: z.string().min(1),
  });

  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const body = schema.parse(req.body);
    await alterar_senha({ session: session!, ...body });
    res.status(200).json({ result: true, type: "sucess" });
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
