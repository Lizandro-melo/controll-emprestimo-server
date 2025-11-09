import { emprestimo } from "@prisma/client";

export type response = {
  result?: any;
  m?: string;
  type: "sucess" | "error";
};

export type register = {
  nome_completo: string;
  num_cpf: string;
  num_cel: string;
  correio_eletronico: string;
  data_nascimento: string;
  codigo_postal: string;
  numero_residencial: string;
  senha: string;
  senha_confirmacao: string;
};

export type create_cliente_props = {
  nome_completo: string;
  num_cpf: string;
  num_cel: string;
  codigo_postal: string;
  numero_residencial: string;
  observacao?: string;
};

export type create_emprestimo_props = {
  emprestimo_props: emprestimo;
  uuid_cliente: string;
};
