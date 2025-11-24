import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response } from "@/domain/entities";
import { emprestimo } from "@prisma/logic";
import { createCliente } from "@/domain/usecases/cliente";
import {
  createEmprestimo,
  findEmprestimoPage,
} from "@/domain/usecases/emprestimo";

export default async function emprestimoApiFindPage(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const page = req.query.page as string;
    const emprestimos = await findEmprestimoPage({
      session: session!,
      page: parseInt(page),
    });
    res.status(200).json({ result: emprestimos, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
