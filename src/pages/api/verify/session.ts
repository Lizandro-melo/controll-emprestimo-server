import {
  consult_tipo_user_by_uuid,
  consult_uuid_auth_by_session,
} from "@/utils/server/service/consult";
import { response } from "@/utils/server/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  const session = req.query.session as string;
  try {
    const { uuid } = await consult_uuid_auth_by_session(session);
    const role = await consult_tipo_user_by_uuid(uuid!);
    switch (role) {
      case "OPERADOR": {
        res.status(200).json({ result: "/", type: "sucess" });
      }
    }
  } catch {
    res.status(400).json({ result: "/", type: "error" });
  }
}
