import axios from "axios";
import moment from "moment-timezone";
import { DAYS_EXPIRE_SUB } from "../constants";

export default class Assas {
  private API_KEY: string;
  private TYPE_APLICANTION: "Sandbox" | "Production";
  private URL_HOST: string;
  private headers: any;
  private WALLET_ID: string | undefined;

  public constructor(
    API_KEY: string,
    TYPE_APLICANTION: "Sandbox" | "Production",
  ) {
    this.API_KEY = `$${API_KEY}`;
    this.TYPE_APLICANTION = TYPE_APLICANTION;
    this.URL_HOST =
      TYPE_APLICANTION === "Sandbox"
        ? "https://api-sandbox.asaas.com/v3"
        : "https://api.asaas.com/v3";
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      access_token: `$${API_KEY}`,
    };
  }

  public async create_client({
    ...props
  }: {
    name: string;
    cpfCnpj: string;
    mobilePhone: string;
    addressNumber: string;
    postalCode: string;
    email: string;
  }): Promise<string> {
    return await axios
      .post(
        `${this.URL_HOST}/customers`,
        { ...props },
        {
          headers: this.headers,
        },
      )
      .then((response) => response.data.id);
  }

  public async create_assinatura(id_cliente: string): Promise<string> {
    return await axios
      .post(
        `${this.URL_HOST}/subscriptions`,
        {
          billingType: "PIX",
          cycle: "MONTHLY",
          customer: id_cliente,
          value: 50,
          nextDueDate: moment().tz("America/Sao_Paulo").add(1, "M").toDate(),
          description: "Assinatura do app Controll - Emprestimo",
        },
        {
          headers: this.headers,
        },
      )
      .then((response) => response.data.id);
  }

  public async consult_sub(id_sub: string): Promise<string | null> {
    const response = await axios.get(
      `${this.URL_HOST}/subscriptions/${id_sub}/payments?status=OVERDUE`,
      {
        headers: this.headers,
      },
    );

    const pagamentos = response.data?.data ?? [];
    if (pagamentos.length === 0) return null;

    const now = moment.tz("America/Sao_Paulo");
    const maiorAtraso = pagamentos.reduce(
      (acc: { atraso: number; invoiceUrl: string | null }, pagamento: any) => {
        if (!pagamento?.dueDate) return acc;
        const atrasoDias = now.diff(moment(pagamento.dueDate), "d", true);
        if (atrasoDias > acc.atraso) {
          return {
            atraso: atrasoDias,
            invoiceUrl: pagamento?.invoiceUrl ?? pagamento?.bankSlipUrl ?? null,
          };
        }
        return acc;
      },
      { atraso: 0, invoiceUrl: null },
    );

    if (maiorAtraso.atraso >= DAYS_EXPIRE_SUB) {
      return maiorAtraso.invoiceUrl;
    }

    return null;
  }
}
