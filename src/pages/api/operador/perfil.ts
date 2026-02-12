import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { response } from "@/domain/entities";
import {
  getOperadorProfile,
  updateOperadorProfile,
} from "@/domain/usecases/operador";
import cors from "@/presentation/lib/middlewares/cors";

export default async function OperadorPerfilApi(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (req.method === "GET") {
    if (cors(req, res, "GET")) return;
  } else if (req.method === "PUT") {
    if (cors(req, res, "PUT")) return;
  } else if (cors(req, res, "GET")) {
    return;
  }

  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    if (!session) {
      res.status(403).json({ m: "Sessao invalida.", type: "error" });
      return;
    }

    if (req.method === "GET") {
      const profile = await getOperadorProfile({ session });
      res.status(200).json({ result: profile, type: "sucess" });
      return;
    }

    const schema = z.object({
      nome_completo: z.string().min(1),
      num_cpf: z.string().min(1),
      correio_eletronico: z.string().min(1),
      data_nascimento: z.string().nullable().optional(),
      num_cnpj: z.string().nullable().optional(),
    });
    const body = schema.parse(req.body);
    await updateOperadorProfile({ session, profile: body });
    res.status(200).json({ result: true, type: "sucess" });
    return;
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
