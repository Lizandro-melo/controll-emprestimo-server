import { log } from "console";
import moment from "moment-timezone";
import type { NextApiRequest, NextApiResponse } from "next";
import { isCPF } from "validation-br";
import z, { success } from "zod";

import { register, response } from "@/domain/entities";
import { register_operador } from "@/domain/usecases/auth";
import cors from "@/presentation/lib/middlewares/cors";

export default async function registerApi(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "PUT")) return;
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const register = req.body;
    await register_operador({ token: token!, register: register });
    res.status(200).json({
      result: null,
      m: "Você foi registrado com sucesso!",
      type: "sucess",
    });
  } catch (e: any) {
    console.error(e.message, moment.tz("America/Sao_Paulo").toDate());
    res.status(500).json({
      result: null,
      m: e.message,
      type: "error",
    });
  }
}
