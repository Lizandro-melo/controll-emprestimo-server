import { PRISMA } from "../db";
import moment from "moment-timezone";
import { compare, hash } from "bcrypt";
import { consult_senhaCrypt_by_uuid, consult_session_by_uuid } from "./consult";
import {
  ASSAS,
  DAYS_EXPIRE_SESSION,
  SALT_ROUNDS,
  VALOR_SISTEMA,
} from "../constants";
import { create_cliente_props, register } from "../types";
import { cliente, emprestimo } from "@prisma/client";
import { log } from "console";

export const generate_session_by_uuid = async (
  senha: string,
  uuid: string
): Promise<string> => {
  const consult_senha = await consult_senhaCrypt_by_uuid(uuid);
  if (await compare(senha, consult_senha)) {
    const consult_session = await consult_session_by_uuid(uuid);
    if (consult_session) return consult_session;
    return await PRISMA.historico_session
      .create({
        data: {
          uuid_auth: uuid,
          expira_time: moment()
            .tz("America/Sao_Paulo")
            .add(DAYS_EXPIRE_SESSION, "d")
            .format(),
        },
      })
      .then((response) => response.uuid);
  } else throw new Error("Login ou senha invalidos");
};

export const create_operador = async (data: register) => {
  const id_asaas = await ASSAS.create_client({
    cpfCnpj: data.num_cpf,
    mobilePhone: data.num_cel,
    name: data.nome_completo,
    addressNumber: data.numero_residencial,
    email: data.correio_eletronico,
    postalCode: data.codigo_postal,
  });
  const id_sub = await ASSAS.create_assinatura(id_asaas);
  const uuid_auth = (
    await PRISMA.auth.create({
      data: {
        id_asaas: id_asaas,
        id_sub: id_sub,
      },
    })
  ).uuid;
  await PRISMA.historico_senha.create({
    data: {
      senha: await hash(data.senha, SALT_ROUNDS),
      uuid: uuid_auth,
    },
  });
  await PRISMA.operador.create({
    data: {
      uuid: uuid_auth,
      nome_completo: data.nome_completo,
      correio_eletronico: data.correio_eletronico,
      num_cpf: data.num_cpf,
      data_nascimento: moment(data.data_nascimento).toDate(),
    },
  });
  await PRISMA.telefone_operador.create({
    data: {
      uuid_operador: uuid_auth,
      num_cel: data.num_cel,
    },
  });
  await PRISMA.endereco_operador.create({
    data: {
      uuid_operador: uuid_auth,
      codigo_postal: data.codigo_postal,
      numero_residencial: data.numero_residencial,
    },
  });
};

export const disable_token_register = async (token: string) => {
  await PRISMA.register_token.update({
    where: {
      uuid: token,
      status: true,
    },
    data: { status: false },
  });
};

export const create_cliente = async (
  create_cliente_props: create_cliente_props,
  uuid_auth: string
) => {
  const cliente = await PRISMA.cliente.create({
    data: {
      nome_completo: create_cliente_props.nome_completo,
      num_cpf: create_cliente_props.num_cpf,
      observacao: create_cliente_props.observacao,
      uuid_operador: uuid_auth,
    },
  });
  await PRISMA.endereco_cliente.create({
    data: {
      uuid_cliente: cliente.uuid,
      numero_residencial: create_cliente_props.numero_residencial,
      codigo_postal: create_cliente_props.codigo_postal,
    },
  });
  await PRISMA.telefone_cliente.create({
    data: {
      uuid_cliente: cliente.uuid,
      num_cel: create_cliente_props.num_cel,
    },
  });
};

export const create_emprestimo = async (
  emprestimo_props: emprestimo,
  uuid_cliente: string,
  uuid_operador: string
) => {
  await PRISMA.emprestimo.create({
    data: {
      ...emprestimo_props,
      uuid_operador: uuid_operador,
      uuid_cliente: uuid_cliente,
    },
  });
};
