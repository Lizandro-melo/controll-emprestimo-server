import type { NextApiRequest, NextApiResponse } from "next";
import { consult_uuid_auth_by_session } from "@/utils/server/service/consult";

import { log } from "console";
import { cors } from "../_middlewares/cors";
import { create_emprestimo_props, response } from "@/utils/server/types";
import { create_emprestimo } from "@/utils/server/service/generate";
import moment from "moment-timezone";

export default async function emprestimoApiCreate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  try {
    if (cors(req, res)) return;
    const emprestimo_props: create_emprestimo_props = req.body;
    const session_key = req.headers.authorization?.replace("Bearer ", "");
    const { uuid } = await consult_uuid_auth_by_session(session_key!);
    await create_emprestimo(
      emprestimo_props.emprestimo_props,
      emprestimo_props.uuid_cliente,
      uuid
    );
    res.status(200).json({
      result: null,
      m: "Empréstimo criado com sucesso",
      type: "sucess",
    });
  } catch (e: any) {
    log(e.message, moment().tz("America/Sao_Paulo").toNow());
    res.status(403).json({
      m: "Houve um erro ao tentar criar um empréstimo",
      type: "error",
    });
  }
}
