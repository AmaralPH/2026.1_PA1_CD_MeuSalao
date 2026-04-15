import { Clock } from "lucide-react";
import type { Servico } from "@/lib/mock-data";

interface ServicoItemProps {
  servico: Servico;
  salaoId: string;
}

export default function ServicoItem({ servico, salaoId }: ServicoItemProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:border-violet-200 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-gray-900 leading-tight pr-2">{servico.nome}</h3>
        <span className="font-black text-violet-700 text-lg shrink-0">R$ {servico.preco}</span>
      </div>
      <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-4">
        <Clock className="w-3.5 h-3.5" />
        <span>{servico.duracao} minutos</span>
      </div>
      <a href={`/cliente/${salaoId}/agendar?servico=${servico.id}`} className="block">
        <button className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-3 rounded-xl transition-all hover:shadow-md text-sm">
          Agendar
        </button>
      </a>
    </div>
  );
}
