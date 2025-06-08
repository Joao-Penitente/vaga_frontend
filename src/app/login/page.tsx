"use client";
import { Button } from "@/components/Button";
import {
  InputField,
  InputLabel,
  InputPassword,
  InputRoot,
} from "@/components/Input";
import Logo from "@/components/Logo";
import Image from "next/image";
import { login } from "./actions";
import Link from "next/link";

export default function Login() {
  return (
    <form
      action=""
      className="bg-[#F9FBFF] w-full h-screen flex flex-col items-center  p-3 md:p-0 md:justify-center "
    >
      <div
        className="flex items-center justify-center h-full w-full flex-col rounded-[20px] md:gap-11 p-[10px] md:max-h-[500px] md:flex-row md:max-w-[750px]"
        style={{ boxShadow: "0px 100px 200px 0px #00000040" }}
      >
        <div className="px-5 py-10 pb-[50px]">
          <div className="flex flex-col gap-[35px] h-[380px] w-[300px] ">
            <Logo />

            <div className="flex flex-col gap-[2.5px]">
              <h1 className="text-[26px] font-bold text-orange leading-5">
                Bem-vindo de volta
              </h1>
              <h3 className="text-[13px] text-subtitle leading-4">
                Entre com sua conta para acessar o painel.
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              <InputRoot>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seunome@seuservidor.com"
                />
              </InputRoot>

              <InputRoot>
                <InputLabel htmlFor="Senha">Senha</InputLabel>
                <InputPassword
                  id="Senha"
                  name="Senha"
                  placeholder="Digite aqui"
                />
              </InputRoot>

              <Link href="/eventos">
                <Button onClick={login}> Enviar</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-orange rounded-[20px] relative h-full flex justify-center align-bottom md:max-h-[478px] w-[350px]">
          <Image
            src="/login.svg"
            width={350}
            height={316}
            alt="logo"
            className="absolute -bottom-[1px] md:bottom-0 md:-left-10 object-contain"
          />
        </div>
      </div>
    </form>
  );
}
