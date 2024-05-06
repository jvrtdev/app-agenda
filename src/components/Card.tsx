interface CardProps{
  index: number;
  title: string;
  desc: string;
}

const CardsData:CardProps[] = [
  {
    index: 1,
    title: "Agendamento Simplificado",
    desc: "Deixe para trás os métodos antiquados de agendamento por telefone e papel. Com nossa plataforma, seus clientes podem agendar serviços online de forma rápida e conveniente, 24 horas por dia, 7 dias por semana."
  },
  {
    index: 2,
    title: "Agenda Inteligente",
    desc: "Otimize o uso do tempo dos seus funcionários e evite conflitos de agendamento com nossa agenda inteligente. Visualize facilmente os horários disponíveis e ocupados, e ajuste as programações com apenas alguns cliques."
  },
  {
    index: 3,
    title: "Lembretes Automatizados",
    desc: "Reduza o número de faltas e cancelamentos com lembretes automatizados de agendamento. Envie lembretes por e-mail ou mensagem de texto para garantir que seus clientes nunca se esqueçam de suas consultas."
  }
]


export function Card({index, title, desc}: CardProps) {

  return(
    <div className="bg-opacity-50  shadow rounded-lg w-[350px] p-3 bg-[#95a5a6]">
      <div className="flex justify-between flex-col ">
        <div className="flex items-center mb-2">
          <h1 className="text-xl font-bold">{index}-</h1>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export function CardsMap() {
  return(
    <div className="flex gap-2 flex-col">
      {CardsData.map((card: any) => (
        <Card index={card.index} title={card.title} desc={card.desc} key={card.index} />
        ))
      }
    </div>
  )
}