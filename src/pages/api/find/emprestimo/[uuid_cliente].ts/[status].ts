import type { NextApiRequest, NextApiResponse } from "next";
import {
  consult_emprestimos_cliente_by_uuid,
  consult_uuid_auth_by_session,
  consult_uuid_cliente_by_uuid_cliente,
} from "@/utils/server/service/consult";

import { log } from "console";
import { create_emprestimo_props, response } from "@/utils/server/types";
import { create_emprestimo } from "@/utils/server/service/generate";
import moment from "moment-timezone";
import { cors } from "@/pages/api/_middlewares/cors";

export default async function emprestimoApiFind(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  try {
    if (cors(req, res)) return;
    const session_key = req.headers.authorization?.replace("Bearer ", "");
    const { uuid } = await consult_uuid_auth_by_session(session_key!);
    const uuid_cliente = req.query.uuid_cliente as string;
    const status = req.query.status as "pendente" | "pago";
    const emprestimos = await consult_emprestimos_cliente_by_uuid(
      uuid,
      uuid_cliente,
      status.toUpperCase()
    );
    res.status(200).json({
      result: emprestimos,
      type: "sucess",
    });
  } catch (e: any) {
    res.status(403).json({
      m: e.message,
      type: "error",
    });
  }
}
