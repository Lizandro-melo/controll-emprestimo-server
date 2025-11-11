/*
  Warnings:

  - Added the required column `data_final` to the `emprestimo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_vencimento` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_previsto` to the `pagamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emprestimo" ADD COLUMN     "data_final" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pagamento" ADD COLUMN     "data_vencimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "valor_previsto" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "valor_pago" DROP NOT NULL,
ALTER COLUMN "data_pagamento" DROP NOT NULL,
ALTER COLUMN "data_pagamento" DROP DEFAULT;
