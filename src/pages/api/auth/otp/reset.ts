import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { response } from "@/domain/entities";
import { resetar_senha_otp } from "@/domain/usecases/auth";
import cors from "@/presentation/lib/middlewares/cors";

export default async function OtpResetApi(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (cors(req, res, "POST")) return;

  const schema = z.object({
    cpf: z.string().min(1),
    code: z.string().min(6).max(6),
    senha_nova: z.string().min(1),
    senha_confirmacao: z.string().min(1),
  });

  try {
    const body = schema.parse(req.body);
    await resetar_senha_otp(body);
    res.status(200).json({ result: true, type: "sucess" });
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
