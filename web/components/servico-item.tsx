import { Clock } from "lucide-react";
import type { Servico } from "@/lib/mock-data";

interface ServicoItemProps {
  servico: Servico;
  salaoId: string;
}

export default function ServicoItem({ servico, salaoId }: ServicoItemProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:border-purple-200 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-gray-900">{servico.nome}</h3>
        <span className="font-bold text-purple-600 text-lg">R$ {servico.preco}</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
        <Clock className="w-3.5 h-3.5" />
        <span>{servico.duracao} minutos</span>
      </div>
      <a href={`/cliente/${salaoId}/agendar?servico=${servico.id}`}>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
          Agendar
        </button>
      </a>
    </div>
  );
}
