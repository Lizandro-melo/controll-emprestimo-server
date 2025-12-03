import type { NextApiRequest, NextApiResponse } from "next";

import { response, pagamento_props } from "@/domain/entities";

import {
  findPagamentoPage,
  findUniquePagamento,
  updatePagamento,
} from "@/domain/usecases/pagamento";
import { deleteEmprestimo, findEmprestimoUnique } from "@/domain/usecases/emprestimo";
import cors from "@/presentation/lib/middlewares/cors";
export default async function emprestimoApiFindUnique(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  if (cors(req, res, "DELETE")) return;
  try {
    const session = req.headers.authorization?.replace("Bearer ", "");
    const uuid_emprestimo = req.query.uuid_emprestimo as string;
    const emprestimo = await deleteEmprestimo({
      session: session!,
      uuid_emprestimo: uuid_emprestimo!,
    });
    res.status(200).json({ m: "Emprestimo e pagamentos deletados com sucesso!", type: "sucess" });
  } catch (e: any) {
    res.status(403).json({ m: e.message, type: "error" });
  }
}
