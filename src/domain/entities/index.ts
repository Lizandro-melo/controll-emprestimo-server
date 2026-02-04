import type {
  celular_cliente,
  cliente,
  emprestimo,
  endereco_cliente,
  pagamento,
  Tipo_cobranca,
  Tipo_pagamento,
} from "@/../prisma/generated/logic";

export type response = {
  result?: any;
  m?: any;
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

export type create_cliente = {
  nome_completo: string;
  num_cpf: string;
  observacao?: string;
  num_cel: string;
  codigo_postal: string;
  numero_residencial: string;
};

export type create_emprestimo_props = {
  nome_emprestimo: string;
  valor_emprestimo: number;
  valor_receber: number;
  tipo: Tipo_cobranca;
  data_emprestimo: Date | string;
  observacao?: string;
  uuid_cliente: string;
  uuid_operador: string;
  quantidade_parcelas: number;
};

export type update_emprestimo_props = {
  uuid: string;
  nome_emprestimo: string;
  valor_emprestimo: number;
  valor_receber: number;
  tipo: Tipo_cobranca;
  data_emprestimo: Date | string;
  observacao?: string;
  quantidade_parcelas?: number;
};

export type find_cliente = {
  nome_completo: string;
  num_cpf: string;
  correio_eletronico: string;
  num_cel: string;
  data_contrato: string;
  data_fim_contrato: string;
  veiculo_vinculado: boolean;
}[];

export type pagamento_props = {
  uuid_pagamento: string;
  uuid_emprestimo: string;
  valor_pago: number | null;
  tipo_pagamento: Tipo_pagamento | "";
  data_pagamento: string | "";
  comprovante?: string | null;
  observacao?: string;
};

export type dashboard_props = {
  clientes_pendentes: cliente[];
};

export type caixa_props = {
  total_recebido: number;
  total_previsto_mes: number;
  total_recebido_mes: number;
  total_previsto_dia: number;
  total_recebido_dia: number;
  total_emprestado_dia: number;
};

export type relatorio_props = {
  total_previsto: number;
  total_recebido: number;
};

export type cliente_props = {
  cliente: {
    uuid: string;
    nome_completo: string;
    num_cpf: string;
    num_cnpj: string | null;
    data_nascimento: string | null;
    correio_eletronico: string | null;
    observacao: string | null;
    uuid_operador: string;
    status: boolean;
  };
  celulares: celular_cliente[];
  enderecos: endereco_cliente[];
  emprestimos: emprestimo[];
  pagamentos: pagamento[];
};

export type emprestimo_find_props = {
  emprestimo: emprestimo;
  pagamentos: pagamento[];
};
