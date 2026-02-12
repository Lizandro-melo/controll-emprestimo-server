import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT
  ? Number(process.env.SMTP_PORT)
  : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM;
const SMTP_SECURE = process.env.SMTP_SECURE === "true";

function getTransport() {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error("Configuracao SMTP ausente.");
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendOtpEmail(to: string, code: string) {
  const transport = getTransport();
  await transport.sendMail({
    from: SMTP_FROM,
    to,
    subject: "Codigo de verificacao",
    text: `Seu codigo de verificacao e: ${code}`,
  });
}
