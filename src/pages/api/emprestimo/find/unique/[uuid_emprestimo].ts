import type { NextApiRequest, NextApiResponse } from "next";
import cors from "@/presentation/lib/middlewares/cors";
import { response, pagamento_props } from "@/domain/entities";

import {
  findPagamentoPage,
  findUniquePagamento,
  updatePagamento,
} from "@/domain/usecases/pagamento";
import { findEmprestimoUnique } from "@/domain/usecases/emprestimo";

export default async function emprestimoApiFindUnique(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "GET")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const uuid_emprestimo = req.query.uuid_emprestimo as string;
    const emprestimo = await findEmprestimoUnique({
      session: session!,
      uuid_emprestimo: uuid_emprestimo!,
    });
    res.status(200).json({ result: emprestimo, type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
