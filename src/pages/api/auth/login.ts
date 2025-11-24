import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { login } from "@/domain/usecases/auth";
import { response } from "@/domain/entities";
import cors from "@/presentation/lib/middlewares/cors";

export default async function loginApi(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "POST")) return;
  const schemaLogin = z.object({
    login: z.string(),
    senha: z.string(),
  });

  const login_form = z.parse(schemaLogin, req.body);

  try {
    const session = await login(login_form);
    res.status(200).json({ result: session, type: "sucess" });
  } catch (e: any) {
    res
      .status(400)
      .json({ result: null, m: "Login ou senha inválidos", type: "error" });
  }
}
