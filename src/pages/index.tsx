// Código melhorado com estilização mais bonita usando Tailwind e UI mais limpa
import { register } from "@/domain/entities";
import { Button } from "@/presentation/components/ui/button";
import LabelInput from "@/presentation/components/ui/label-input";
import { validatePassword } from "@/presentation/components/ui/passwordValidator";
import { formatInputLogin } from "@/presentation/lib/utils";
import { ContextAlert } from "@/presentation/provider/provider_alert";
import { ContextLoading } from "@/presentation/provider/provider_loading";

import axios from "axios";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [registerBool, setRegisterBool] = useState(false);
  const { startLoading } = useContext(ContextLoading);
  const { drop_alert } = useContext(ContextAlert);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm<register>();
  const senha = watch("senha");
  const senhaConfirm = watch("senha_confirmacao");

  const registrar_conta = async (data: register) => {
    const { valid, errors: pwdErrors } = validatePassword(data.senha || "");
    if (!valid) {
      // marca o campo senha com erro e não envia
      setError("senha", { type: "manual", message: pwdErrors.join(" • ") });
      return;
    }

    // validar confirmação
    if (data.senha !== data.senha_confirmacao) {
      setError("senha_confirmacao", {
        type: "manual",
        message: "As senhas não coincidem",
      });
      return;
    }

    startLoading(
      axios
        .put("/api/auth/register", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          drop_alert(response.data.type, response.data.m);
          setRegisterBool(true);
        })
        .catch((e) => {
          drop_alert(e.response?.data?.type, e.response?.data?.m ?? "Erro");
        })
    );
  };

  useEffect(() => {
    if (!errors.senha && senha) {
      const { valid } = validatePassword(senha);
      if (valid) clearErrors("senha");
    }
    if (errors.senha_confirmacao && senha === senhaConfirm) {
      clearErrors("senha_confirmacao");
    }
  }, [senha, senhaConfirm]);

  return (
    <form
      onSubmit={handleSubmit(registrar_conta)}
      className="max-w-4xl mx-auto mt-10 bg-white shadow-2xl border rounded-2xl p-10 flex flex-col gap-10 animate-fadeIn"
    >
      <div className="flex justify-center">
        <Image src="/assets/letreiro.png" width={250} height={200} alt="Logo" />
      </div>

      {registerBool ? (
        <span className="text-3xl font-semibold text-center text-green-600 animate-fadeIn">
          Bem vindo ao Controll 🎉
        </span>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col gap-5">
              <LabelInput
                className="w-full"
                id="Nome Sobrenome"
                {...register("nome_completo", { required: true })}
              />

              <LabelInput
                className="w-full"
                id="CPF"
                onInput={formatInputLogin}
                {...register("num_cpf", { required: true })}
              />

              <LabelInput
                className="w-full"
                id="Num. Celular"
                type="tel"
                {...register("num_cel", { required: true })}
              />

              <LabelInput
                className="w-full"
                id="E-mail"
                type="email"
                {...register("correio_eletronico", { required: true })}
              />

              <LabelInput
                className="w-full"
                id="Data de nascimento"
                type="date"
                {...register("data_nascimento", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-5">
              <LabelInput
                className="w-full"
                id="CEP"
                {...register("codigo_postal", { required: true })}
              />

              <LabelInput
                className="w-full"
                id="Numero residencial"
                {...register("numero_residencial", {
                  required: true,
                })}
              />

              <LabelInput
                className="w-full"
                id="Senha"
                type="password"
                autoComplete="off"
                {...register("senha", { required: true })}
              />
              {errors.senha && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.senha.message}
                </p>
              )}

              <LabelInput
                className="w-full"
                id="Confirmar Senha"
                type="password"
                autoComplete="off"
                {...register("senha_confirmacao", { required: true })}
              />
              {errors.senha_confirmacao && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.senha_confirmacao.message}
                </p>
              )}
            </div>
          </div>

          {errors && (
            <p className="text-red-500 text-center font-semibold">
              Todos os campos são obrigatórios
            </p>
          )}

          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-10 text-sm cursor-pointer rounded-xl"
            >
              Registrar
            </Button>
          </div>
        </>
      )}
    </form>
  );
}
