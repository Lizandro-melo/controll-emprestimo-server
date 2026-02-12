import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { response } from "@/domain/entities";
import { solicitar_otp_redefinicao } from "@/domain/usecases/auth";
import cors from "@/presentation/lib/middlewares/cors";

export default async function OtpApi(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (cors(req, res, "POST")) return;

  const schema = z.object({
    cpf: z.string().min(1),
  });

  try {
    const body = schema.parse(req.body);
    await solicitar_otp_redefinicao({ cpf: body.cpf });
    res.status(200).json({ result: true, type: "sucess" });
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
