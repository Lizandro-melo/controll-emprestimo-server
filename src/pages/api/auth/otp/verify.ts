import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { response } from "@/domain/entities";
import { verificar_otp_redefinicao } from "@/domain/usecases/auth";
import cors from "@/presentation/lib/middlewares/cors";

export default async function OtpVerifyApi(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (cors(req, res, "POST")) return;

  const schema = z.object({
    cpf: z.string().min(1),
    code: z.string().min(6).max(6),
  });

  try {
    const body = schema.parse(req.body);
    await verificar_otp_redefinicao({ cpf: body.cpf, code: body.code });
    res.status(200).json({ result: true, type: "sucess" });
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
