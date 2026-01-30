import Assas from "../assas";

export const DAYS_EXPIRE_SESSION = 30;
export const DAYS_EXPIRE_SUB = 1;
export const SALT_ROUNDS = 10;
export const ASSAS = new Assas(process.env.PAY!, "Production");
