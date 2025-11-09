-- CreateEnum
CREATE TYPE "Tipo_User" AS ENUM ('MASTER', 'ADMIN', 'OPERADOR');

-- CreateEnum
CREATE TYPE "Status_auth" AS ENUM ('ATIVO', 'INATIVO', 'INADIMPLENTE');

-- CreateEnum
CREATE TYPE "Redes" AS ENUM ('WHATSAPP', 'TELEGRAM', 'FACEBOOK', 'LINKEDIN', 'URL');

-- CreateEnum
CREATE TYPE "Status_divida" AS ENUM ('PENDENTE', 'PAGO');

-- CreateEnum
CREATE TYPE "Tipo_pagamento" AS ENUM ('PIX', 'BOLETO', 'CRED', 'DEB', 'DINHEIRO');

-- CreateEnum
CREATE TYPE "Tipo_cobranca" AS ENUM ('ANUAL', 'MENSAL', 'SEMANAL', 'DIARIO');

-- CreateTable
CREATE TABLE "register_token" (
    "uuid" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "data_util" TIMESTAMP(3),

    CONSTRAINT "register_token_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "auth" (
    "uuid" TEXT NOT NULL,
    "role" "Tipo_User" NOT NULL DEFAULT 'OPERADOR',
    "status" "Status_auth" NOT NULL DEFAULT 'ATIVO',
    "id_sub" TEXT,
    "id_asaas" TEXT,

    CONSTRAINT "auth_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "historico_session" (
    "uuid" TEXT NOT NULL,
    "uuid_auth" TEXT NOT NULL,
    "record_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expira_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "historico_session_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "historico_otp" (
    "uuid" TEXT NOT NULL,
    "code_otp" TEXT NOT NULL,
    "record_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_otp_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "historico_senha" (
    "uuid" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "record_update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "historico_senha_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "operador" (
    "uuid" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "num_cpf" TEXT NOT NULL,
    "num_cnpj" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "correio_eletronico" TEXT,

    CONSTRAINT "operador_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "telefone_operador" (
    "id" SERIAL NOT NULL,
    "num_cel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "uuid_operador" TEXT NOT NULL,

    CONSTRAINT "telefone_operador_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "cliente" (
    "uuid" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "num_cpf" TEXT NOT NULL,
    "num_cnpj" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "correio_eletronico" TEXT,
    "observacao" TEXT,
    "uuid_operador" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "configuracao" (
    "id" SERIAL NOT NULL,
    "alerta_dias_antes" INTEGER NOT NULL,
    "senha_entrada" INTEGER NOT NULL,

    CONSTRAINT "configuracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rede_social" (
    "id" SERIAL NOT NULL,
    "uuid_cliente" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tipo_rede" "Redes" NOT NULL,

    CONSTRAINT "rede_social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "telefone_cliente" (
    "id" SERIAL NOT NULL,
    "num_cel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "uuid_cliente" TEXT NOT NULL,

    CONSTRAINT "telefone_cliente_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "emprestimo" (
    "uuid" TEXT NOT NULL,
    "nome_emprestimo" TEXT NOT NULL,
    "valor_emprestimo" DOUBLE PRECISION NOT NULL,
    "tipo" "Tipo_cobranca" NOT NULL,
    "data_emprestimo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_receber" DOUBLE PRECISION NOT NULL,
    "observacao" TEXT,
    "status" "Status_divida" NOT NULL DEFAULT 'PENDENTE',
    "uuid_operador" TEXT NOT NULL,
    "uuid_cliente" TEXT NOT NULL,

    CONSTRAINT "emprestimo_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "uuid" TEXT NOT NULL,
    "valor_pago" DOUBLE PRECISION NOT NULL,
    "uuid_emprestimo" TEXT NOT NULL,
    "tipo_pagamento" "Tipo_pagamento" NOT NULL,
    "data_pagamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comprovante" TEXT,
    "observacao" TEXT,

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_token_uuid_key" ON "register_token"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "auth_uuid_key" ON "auth"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "historico_session_uuid_key" ON "historico_session"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "operador_num_cpf_key" ON "operador"("num_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "telefone_operador_num_cel_key" ON "telefone_operador"("num_cel");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_uuid_key" ON "cliente"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "rede_social_id_key" ON "rede_social"("id");

-- CreateIndex
CREATE UNIQUE INDEX "telefone_cliente_num_cel_key" ON "telefone_cliente"("num_cel");

-- CreateIndex
CREATE UNIQUE INDEX "emprestimo_uuid_key" ON "emprestimo"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "pagamento_uuid_key" ON "pagamento"("uuid");

-- AddForeignKey
ALTER TABLE "historico_session" ADD CONSTRAINT "historico_session_uuid_auth_fkey" FOREIGN KEY ("uuid_auth") REFERENCES "auth"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_otp" ADD CONSTRAINT "historico_otp_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "auth"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_senha" ADD CONSTRAINT "historico_senha_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "auth"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operador" ADD CONSTRAINT "operador_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "auth"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "telefone_operador" ADD CONSTRAINT "telefone_operador_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco_operador" ADD CONSTRAINT "endereco_operador_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rede_social" ADD CONSTRAINT "rede_social_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "telefone_cliente" ADD CONSTRAINT "telefone_cliente_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco_cliente" ADD CONSTRAINT "endereco_cliente_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_uuid_cliente_fkey" FOREIGN KEY ("uuid_cliente") REFERENCES "cliente"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_uuid_operador_fkey" FOREIGN KEY ("uuid_operador") REFERENCES "operador"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_uuid_emprestimo_fkey" FOREIGN KEY ("uuid_emprestimo") REFERENCES "emprestimo"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
