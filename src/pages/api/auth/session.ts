
import type { NextApiRequest, NextApiResponse } from "next";

import { session_consult } from "@/domain/usecases/auth";
import { response } from "@/domain/entities";
import cors from "@/presentation/lib/middlewares/cors";

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse<response>,
) {
  if (cors(req, res, "GET")) return;
  const session = req.query.session as string;
  try {
    const role = await session_consult({ session });
    switch (role) {
      case "OPERADOR": {
        res.status(200).json({ result: "/operadorui", type: "sucess" });
      }
    }
  } catch (e: any) {
    const invoiceUrl = e?.invoiceUrl;
    res.status(400).json({
      result: "/",
      m: invoiceUrl ? { message: e.message, invoiceUrl } : e.message,
      type: "error",
    });
  }
}
