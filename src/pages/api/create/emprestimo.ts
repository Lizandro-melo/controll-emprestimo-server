import type { NextApiRequest, NextApiResponse } from "next";
import {
  consult_uuid_auth_by_session,
  consult_uuid_cliente_by_uuid_cliente,
} from "@/utils/server/service/consult";

import { log } from "console";
import cors from "../_middlewares/cors";
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
    const uuid_cliente = await consult_uuid_cliente_by_uuid_cliente(
      emprestimo_props.uuid_cliente,
      uuid
    );
    await create_emprestimo(emprestimo_props.emprestimo, uuid_cliente, uuid);
    res.status(200).json({
      result: null,
      m: "Empréstimo criado com sucesso",
      type: "sucess",
    });
  } catch (e: any) {
    log(e.message, moment().tz("America/Sao_Paulo").toDate());
    res.status(403).json({
      m: "Houve um erro ao tentar criar um empréstimo",
      type: "error",
    });
  }
}
