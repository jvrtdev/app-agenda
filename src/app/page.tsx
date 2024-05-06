import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import foto1 from "@/../public/foto1.svg"
import foto2 from "@/../public/foto2.svg"
import foto3 from "@/../public/foto3.svg"
import { CardsMap } from "@/components/Card";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";



export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center gap-2 ">
      <MaxWidthWrapper>
        <h1 className="text-4xl font-bold text-center mt-10">Aumente a Eficiência do Seu Negócio com a Agendify!</h1>
        
        <div className="w-full h-screen flex flex-wrap items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Bem vindo!</h1>
            <p className=" max-w-md mb-5">Transforme a maneira como você gerencia os agendamentos dos seus serviços com Agendify. Nossa plataforma simplifica o processo de agendamento, permitindo que sua empresa se concentre no que faz de melhor: proporcionar experiências excepcionais aos seus clientes.</p>
            <Link href="/sign-up" className={cn("border-2 p-2 border-black rounded-full max-w-max hover:scale-150 cursor-pointer ")}>Começar</Link>
          </div>
          <Image src={foto1} alt="foto time empresa"/>
        </div>
        
        <div className="w-full h-screen flex flex-wrap  items-center justify-center">
          <Image src={foto2} alt="foto barbeiro cliente empresa"/>
          <div>
            <h1 className="text-4xl font-bold mb-2 max-w-md">Melhore a Experiência dos Seus Clientes</h1>
            <p className=" max-w-md mb-5">Revitalize o modo como sua empresa interage com os clientes através do nosso serviço. Nossa plataforma não apenas simplifica o processo de agendamento, mas também fortalece o relacionamento entre sua empresa e seus clientes, permitindo que você se concentre no que faz de melhor: oferecer serviços excepcionais.</p>
          </div>
        </div>

        <div className="w-full h-screen flex flex-wrap items-center justify-center">
          <div className="">
            <h1 className="text-4xl font-bold mb-2 max-w-md">Por Que Escolher a Agendify?</h1>
            <CardsMap />
          </div>
          <Image src={foto3} alt="foto barbeiro cliente empresa"/>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
