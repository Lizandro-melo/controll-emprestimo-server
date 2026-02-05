import Assas from "../assas";

export const DAYS_EXPIRE_SESSION = 30;
export const DAYS_EXPIRE_SUB = 1;
export const SALT_ROUNDS = 10;
const TYPE_ASAAS: "Sandbox" | "Production" = process.env.TYPE_ASAAS as
  | "Sandbox"
  | "Production";
export const ASSAS = new Assas(process.env.PAY!, TYPE_ASAAS);
