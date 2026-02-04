/*
  Warnings:

  - You are about to drop the `auth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historico_otp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historico_senha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historico_session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `register_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "redes" AS ENUM ('WHATSAPP', 'TELEGRAM', 'FACEBOOK', 'LINKEDIN', 'URL');

-- CreateEnum
CREATE TYPE "Status_divida" AS ENUM ('PENDENTE', 'PAGO', 'VENCIDO');

-- CreateEnum
CREATE TYPE "Tipo_pagamento" AS ENUM ('PIX', 'BOLETO', 'CRED', 'DEB', 'DINHEIRO');

-- CreateEnum
CREATE TYPE "Tipo_cobranca" AS ENUM ('ANUAL', 'MENSAL', 'QUINZENAL', 'SEMANAL', 'DIARIO');

-- DropForeignKey
ALTER TABLE "historico_otp" DROP CONSTRAINT "historico_otp_uuid_fkey";

-- DropForeignKey
ALTER TABLE "historico_senha" DROP CONSTRAINT "historico_senha_uuid_fkey";

-- DropForeignKey
ALTER TABLE "historico_session" DROP CONSTRAINT "historico_session_uuid_auth_fkey";

-- DropTable
DROP TABLE "auth";

-- DropTable
DROP TABLE "historico_otp";

-- DropTable
DROP TABLE "historico_senha";

-- DropTable
DROP TABLE "historico_session";

-- DropTable
DROP TABLE "register_token";

-- DropEnum
DROP TYPE "Tipo_User";

-- CreateTable
CREATE TABLE "operador" (
    "uuid" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "num_cpf" TEXT NOT NULL,
    "num_cnpj" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "correio_eletronico" TEXT NOT NULL,

    CONSTRAINT "operador_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "celular_operador" (
    "id" SERIAL NOT NULL,
    "num_cel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "uuid_operador" TEXT NOT NULL,

    CONSTRAINT "celular_operador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco_operador" (
    "id" SERIAL NOT NULL,
    "codigo_postal" TEXT NOT NULL,
    "numero_residencial" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "uuid_operador" TEXT NOT NULL,

    CONSTRAINT "endereco_operador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rede_social_operador" (
    "id" SERIAL NOT NULL,
    "uuid_operador" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "rede_social_operador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "uuid" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "num_cpf" TEXT NOT NULL,
    "num_cnpj" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "correio_eletronico" TEXT,
    "observacao" TEXT,
    "uuid_operador" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "delete" BOOLEAN DEFAULT false,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "celular_cliente" (
    "id" SERIAL NOT NULL,
    "num_cel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "uuid_cliente" TEXT NOT NULL,

    CONSTRAINT "celular_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco_cliente" (
    "id" SERIAL NOT NULL,
    "codigo_postal" TEXT NOT NULL,
    "numero_residencial" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "uuid_cliente" TEXT NOT NULL,

    CONSTRAINT "endereco_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rede_social_cliente" (
    "id" SERIAL NOT NULL,
    "uuid_cliente" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "rede_social_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuracao" (
    "id" SERIAL NOT NULL,
    "alerta_dias_antes" INTEGER NOT NULL,
    "senha_entrada" INTEGER NOT NULL,
    "uuid_operador" TEXT NOT NULL,

    CONSTRAINT "configuracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emprestimo" (
    "uuid" TEXT NOT NULL,
    "nome_emprestimo" TEXT NOT NULL,
    "valor_emprestimo" DOUBLE PRECISION NOT NULL,
    "valor_receber" DOUBLE PRECISION NOT NULL,
    "valor_recebido" DOUBLE PRECISION DEFAULT 0,
    "tipo" "Tipo_cobranca" NOT NULL,
    "data_emprestimo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_final" TIMESTAMP(3) NOT NULL,
    "observacao" TEXT,
    "status" "Status_divida" NOT NULL DEFAULT 'PENDENTE',
    "uuid_operador" TEXT NOT NULL,
    "uuid_cliente" TEXT NOT NULL,
    "delete" BOOLEAN DEFAULT false,

    CONSTRAINT "emprestimo_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "uuid" TEXT NOT NULL,
    "valor_pago" DOUBLE PRECISION,
    "valor_previsto" DOUBLE PRECISION NOT NULL,
    "uuid_emprestimo" TEXT NOT NULL,
    "tipo_pagamento" "Tipo_pagamento",
    "data_pagamento" TIMESTAMP(3),
    "data_vencimento" TIMESTAMP(3) NOT NULL,
    "comprovante" BYTEA,
    "observacao" TEXT,
    "uuid_cliente" TEXT NOT NULL,
    "uuid_operador" TEXT NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "status" "Status_divida" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "operador_uuid_key" ON "operador"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "operador_num_cpf_key" ON "operador"("num_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "operador_correio_eletronico_key" ON "operador"("correio_eletronico");

-- CreateIndex
CREATE UNIQUE INDEX "celular_operador_num_cel_key" ON "celular_operador"("num_cel");

-- CreateIndex
CREATE UNIQUE INDEX "rede_social_operador_id_key" ON "rede_social_operador"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_uuid_key" ON "cliente"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_correio_eletronico_key" ON "cliente"("correio_eletronico");

-- CreateIndex
CREATE UNIQUE INDEX "celular_cliente_num_cel_key" ON "celular_cliente"("num_cel");

-- CreateIndex
CREATE UNIQUE INDEX "rede_social_cliente_id_key" ON "rede_social_cliente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "configuracao_uuid_operador_key" ON "configuracao"("uuid_operador");

-- CreateIndex
CREATE UNIQUE INDEX "emprestimo_uuid_key" ON "emprestimo"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "pagamento_uuid_key" ON "pagamento"("uuid");

-- AddForeignKey
ALTER TABLE "celular_operador" ADD CONSTRAINT "celular_operador_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco_operador" ADD CONSTRAINT "endereco_operador_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rede_social_operador" ADD CONSTRAINT "rede_social_operador_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "celular_cliente" ADD CONSTRAINT "celular_cliente_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco_cliente" ADD CONSTRAINT "endereco_cliente_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rede_social_cliente" ADD CONSTRAINT "rede_social_cliente_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracao" ADD CONSTRAINT "configuracao_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_uuid_emprestimo_fkey" FOREIGN KEY ("uuid_emprestimo") REFERENCES "emprestimo"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
