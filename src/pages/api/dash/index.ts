import type { NextApiRequest, NextApiResponse } from "next";

import { create_cliente, response } from "@/domain/entities";
import { createCliente } from "@/domain/usecases/cliente";
import { cors } from "../_middlewares/cors";
import dashboard from "@/domain/usecases/dashboard";

export default async function DashApiFind(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const dash_props = await dashboard({ session: session! });
    res.status(200).json({ result: dash_props, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
