import type { NextApiRequest, NextApiResponse } from "next";
import { cors } from "../../_middlewares/cors";
import { response } from "@/domain/entities";
import { emprestimo } from "@prisma/logic";
import { createCliente } from "@/domain/usecases/cliente";
import { createEmprestimo } from "@/domain/usecases/emprestimo";

export default async function emprestimoApiCreate(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "POST")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const emprestimo_props: emprestimo = req.body;
    await createEmprestimo({
      session: session!,
      emprestimo_props: emprestimo_props,
    });
    res
      .status(200)
      .json({ m: "Emprestimo criado com sucesso!", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
