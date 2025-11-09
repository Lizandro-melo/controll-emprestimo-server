import type { response } from "@/utils/server/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { consult_operador_uuid_by_cpf } from "@/utils/server/service/consult";
import { generate_session_by_uuid } from "@/utils/server/service/generate";
import { ASSAS } from "@/utils/server/constants";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  const schemaLogin = z.object({
    login: z.string(),
    senha: z.string(),
  });
  const { login, senha } = z.parse(schemaLogin, req.body);
  const login_replace = login.replaceAll(".", "").replace("-", "");
  try {
    const { uuid, id_sub } = await consult_operador_uuid_by_cpf(login_replace);
    await ASSAS.consult_sub(id_sub);
    const uuid_session = await generate_session_by_uuid(senha, uuid);
    res.status(200).json({ result: uuid_session, type: "sucess" });
  } catch (e: any) {
    res.status(400).json({ m: e.message, type: "error" });
  }
}
