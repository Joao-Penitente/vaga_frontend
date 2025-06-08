import { Button } from "@/components/Button";
import { InputRoot, InputSearch } from "@/components/Input";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const list = [
  {
    id: 1,
    name: "Clube do Laço Coração Pantaneiro",
    status: "Ativo",
    teams: 10,
    date: "09 a 11 de Junho",
  },
  {
    id: 2,
    name: "Clube do Laço Coração Pantaneiro",
    status: "Ativo",
    teams: 10,
    date: "09 a 11 de Junho",
  },
];

export default function Eventos() {
  return (
    <div className="min-h-screen py-[30px] px-[10px] md:p-[30px] bg-[#F8F8F8] w-full flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[13px]">
        <p className="text-black-opacity text-[16px] font-normal">
          Bem vindo de volta,
          <strong className="font-medium text-[#101010]"> Kaique Steck</strong>
        </p>
        <h2 className="text-orange font-bold text-[20px]">Todos eventos</h2>
      </div>

      <div className="border border-[#09428F2B] flex flex-col p-[20px] rounded-[10px] bg-[#fff]">
        <div className="flex gap-[10px] w-full max-w-[240px] md:max-w-[330px] self-end py-3">
          <InputRoot>
            <InputSearch
              placeholder="Buscar eventos"
              className="h-[30px] md:h-full"
            />
          </InputRoot>
          <Button className="max-w-[90px] h-[30px] text-[10px] md:text-[13px] gap-[2px] md:gap-[9px] md:max-w-[120px] md:h-[36px]">
            <Image
              src="/mais.svg"
              width={15}
              height={15}
              alt="Editar"
              className="w-[8px] h-[8px] md:w-[15px] md:h-[15px]"
            />
            Inserir novo
          </Button>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[540px] ">
            <div
              className={`${poppins.className} font-medium text-[9px] md:text-[13px] text-[#CC623780] text-left grid grid-cols-[1fr_1fr_1fr_1fr_20px] md:grid-cols-[1fr_1fr_1fr_1fr_40px] gap-0 h-[38px] items-center`}
            >
              <p className="w-full md:max-w-[330px]">Nome do evento</p>
              <p className="w-full md:max-w-[330px] px-[20px]">
                Total de equipes
              </p>
              <p className="w-full md:max-w-[330px] px-[20px]">Status</p>
              <p className="w-full md:max-w-[330px] px-[20px]">Data</p>
              <div className="w-[40px]"> </div>
            </div>

            {list.map((item, index) => (
              <div
                className={`text-[#657593] font-normal text-[9px] md:text-[12px] text-left grid grid-cols-[1fr_1fr_1fr_1fr_20px] md:grid-cols-[1fr_1fr_1fr_1fr_40px] border-t border-[#CC62371A] h-[38px] items-center ${
                  list.length === index + 1 ? "border-b" : ""
                }`}
                key={item.id}
              >
                <p className="w-full md:max-w-[330px]">{item.name}</p>
                <p className="w-full md:max-w-[330px] px-[20px]">
                  {item.teams}
                </p>
                <div className="w-full md:max-w-[330px] px-[20px] flex gap-[5px] md:gap-[9px] items-center">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#4DEF00]" />
                  <p>{item.status}</p>
                </div>
                <p className="w-full md:max-w-[330px] px-[20px]">{item.date}</p>
                <Image
                  src="/edit.svg"
                  width={5}
                  height={5}
                  alt="Editar"
                  className="justify-self-end md:mr-[17px] cursor-pointer"
                />
              </div>
            ))}

            <div className="flex gap-[10px] h-[74px] pb-[10px] pt-[30px] justify-end items-center">
              <Button className="text-black bg-[#F5F5F5] max-w-[55px] h-[25px] text-[9px] md:max-w-[75px] md:text-[12px] md:h-full">
                Anterior
              </Button>
              <div className="w-[20px] h-[20px] text-[9px] md:w-[35px] md:h-[35px] md:text-[12px] rounded-full bg-orange text-white flex items-center justify-center">
                1
              </div>
              <div className="w-[20px] h-[20px] text-[9px] md:w-[35px] md:h-[35px] md:text-[12px] rounded-full bg-[#F5F5F5] text-black flex items-center justify-center">
                2
              </div>
              <div className="w-[20px] h-[20px] text-[9px] md:w-[35px] md:h-[35px] md:text-[12px] rounded-full bg-[#F5F5F5] text-black flex items-center justify-center">
                3
              </div>
              <Button className="max-w-[55px] h-[25px] text-[9px] md:max-w-[75px] md:text-[12px] md:h-full">
                Próxima
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
