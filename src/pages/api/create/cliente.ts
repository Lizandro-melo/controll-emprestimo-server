import type { NextApiRequest, NextApiResponse } from "next";
import {
  consult_cliente_by_cpf,
  consult_uuid_auth_by_session,
} from "@/utils/server/service/consult";

import { log } from "console";
import { create_cliente_props, response } from "@/utils/server/types";
import { cliente } from "@prisma/client";
import { isCPF } from "validation-br";
import { create_cliente } from "@/utils/server/service/generate";
import cors from "../_middlewares/cors";

export default async function clienteApiCreate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  try {
    if (cors(req, res)) return;
    const cliente_props: create_cliente_props = req.body;
    cliente_props.num_cpf = cliente_props.num_cpf
      .replaceAll(".", "")
      .replace("-", "");
    if (!isCPF(cliente_props.num_cpf))
      res.status(400).json({ m: "CPF Invalido", type: "error" });
    const session_key = req.headers.authorization?.replace("Bearer ", "");
    const { uuid } = await consult_uuid_auth_by_session(session_key!);
    await consult_cliente_by_cpf(cliente_props.num_cpf, uuid);
    await create_cliente(cliente_props, uuid);
    res
      .status(200)
      .json({ result: null, m: "Cliente criado com sucesso", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
