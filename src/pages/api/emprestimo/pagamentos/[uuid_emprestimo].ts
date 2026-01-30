import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response } from "@/domain/entities";
import { findEmprestimoUnique } from "@/domain/usecases/emprestimo";

export default async function emprestimoPagamentosApi(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const uuid_emprestimo = req.query.uuid_emprestimo as string;
    const emprestimo = await findEmprestimoUnique({
      session: session!,
      uuid_emprestimo,
    });
    res.status(200).json({ result: emprestimo.pagamentos, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
