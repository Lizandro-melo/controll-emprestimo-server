import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response, update_emprestimo_props } from "@/domain/entities";
import { createCliente } from "@/domain/usecases/cliente";
import {
  createEmprestimo,
  updateEmprestimo,
} from "@/domain/usecases/emprestimo";

export default async function emprestimoApiUpdate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "PUT")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const emprestimo_props: update_emprestimo_props = req.body;
    await updateEmprestimo({
      session: session!,
      emprestimo_props: emprestimo_props,
    });
    res
      .status(200)
      .json({ m: "Emprestimo atualizado com sucesso!", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
