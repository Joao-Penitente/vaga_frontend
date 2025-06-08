"use client";
import Image from "next/image";
import Logo from "./Logo";
import { Roboto } from "next/font/google";
import { logout } from "@/app/login/actions";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <aside
      className={`${roboto.className} min-w-[130px] w-full max-w-[130px] md:max-w-[216px] flex flex-col items-center border-r-2 border-white h-[100dvh] max-h-[100dvh] py-[30px] px-[5px] md:px-[15px]`}
    >
      <Logo className="w-[100px] md:w-[160px]" />
      <div className="mt-[30px] w-full h-9/12">
        <h2 className="text-[#A3A3A3] font-extrabold text-[9px] leading-[15px] text-left px-[10px] tracking-[1px]">
          MENU
        </h2>
        <ul className="w-full flex flex-col gap-[7px]">
          <li
            className={
              "flex items-center font-medium  h-[35px] leading-[10px] p-[11px] cursor-pointer text-black text-xs gap-[5px] md:text-sm md:gap-[10px]"
            }
          >
            <Image
              src={"/dashboard.svg"}
              width={15}
              height={15}
              alt="Dashboard"
            />
            Dashboard
          </li>
          <li
            className={
              "flex items-center gap-[10px] font-medium h-[35px] leading-[10px] p-[11px] cursor-pointer text-white bg-orange rounded-[5px] text-xs md:text-sm"
            }
          >
            <Image src="/eventos.svg" width={15} height={15} alt="Eventos" />
            Eventos
          </li>
          <li
            className={
              "flex items-center gap-[10px] font-medium h-[35px] leading-[10px] p-[11px] cursor-pointer text-black text-xs md:text-sm"
            }
          >
            <Image src={"/equipes.svg"} width={15} height={15} alt="Equipes" />
            Equipes
          </li>
          <li
            className={
              "flex items-center gap-[10px] font-medium h-[35px] leading-[10px] p-[11px] cursor-pointer text-black text-xs md:text-sm"
            }
          >
            <Image
              src="/inscrições.svg"
              width={15}
              height={15}
              alt="Inscrições"
            />
            Inscrições
          </li>
        </ul>
      </div>
      <hr className="text-white h-[1px] w-full my-2" />
      <div className="flex flex-col gap-[10px] w-full px-[10px] mt-[30px] md:items-center md:flex-row">
        <div className="inline-block p-[1px] bg-orange rounded-2xl max-w-[46px]">
          <div className="bg-white p-[2px] rounded-2xl">
            <Image
              src="/avatar.png"
              width={40}
              height={40}
              alt="avatar"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-xs md:text-sm">Kaique Steck</h3>
          <p className="text-[#00000080] text-[9px] md:text-[11px] font-normal">
            Administrador
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[5px] mt-[10px] w-full px-[10px]">
        <span className="flex items-center gap-[10px] h-[35px] font-medium cursor-pointer text-xs md:text-sm">
          <Image src={"/alterar.svg"} width={15} height={15} alt="Alterar" />
          Alterar dados
        </span>
        <Link href="/login">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="flex items-center gap-[10px] h-[35px] font-medium cursor-pointer text-xs md:text-sm"
            onClick={logout}
          >
            <Image src={"/sair.svg"} width={15} height={15} alt="Sair" />
            Sair
          </div>
        </Link>
      </div>
    </aside>
  );
}
