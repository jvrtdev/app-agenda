import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import foto1 from "@/../public/foto1.svg"
import foto2 from "@/../public/foto2.svg"


export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center gap-2 ">
      <div className="max-w-screen-xl border-2 border-red-600 w-full">
        <h1 className="text-4xl font-bold text-center mt-10">Aumente a Eficiência do Seu Negócio com JAMF!</h1>
        
        <div className="w-full mt-10 mb-28 flex items-center justify-evenly">
          <div>
            <h1 className="text-4xl font-bold mb-2">Bem vindo!</h1>
            <p className=" max-w-md mb-5">Transforme a maneira como você gerencia os agendamentos dos seus serviços com [Nome do SaaS]. Nossa plataforma simplifica o processo de agendamento, permitindo que sua empresa se concentre no que faz de melhor: proporcionar experiências excepcionais aos seus clientes.</p>
            <Link href="/sign-up" className={cn("border-2 p-2 border-black rounded-full max-w-max hover:scale-150 cursor-pointer ")}>Começar</Link>
          </div>
          <Image src={foto1} alt="foto time empresa"/>
        </div>
        
        <div className="w-full mt-10 mb-20 flex  items-center justify-evenly">
          <Image src={foto2} alt="foto barbeiro cliente empresa"/>
          <div>
            <h1 className="text-4xl font-bold mb-2 max-w-md">Melhore a Experiência dos Seus Clientes</h1>
            <p className=" max-w-md mb-5">Revitalize o modo como sua empresa interage com os clientes através do nosso serviço. Nossa plataforma não apenas simplifica o processo de agendamento, mas também fortalece o relacionamento entre sua empresa e seus clientes, permitindo que você se concentre no que faz de melhor: oferecer serviços excepcionais.</p>
          </div>
        </div>






      </div>  
    </main>
  );
}
