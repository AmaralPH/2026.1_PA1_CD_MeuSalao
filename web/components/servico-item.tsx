import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Servico } from "@/lib/mock-data";

interface ServicoItemProps {
  servico: Servico;
  salaoId: string;
}

export default function ServicoItem({ servico, salaoId }: ServicoItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
      <div className="flex-1 mr-4">
        <p className="font-medium text-gray-900 text-sm">{servico.nome}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <Clock className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-400">{servico.duracao} min</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-900 text-sm">R$ {servico.preco}</span>
        <a href={`/cliente/${salaoId}/agendar?servico=${servico.id}`}>
          <Button size="sm" variant="outline" className="text-xs h-8 px-3 border-blue-200 text-blue-600 hover:bg-blue-50">
            Agendar
          </Button>
        </a>
      </div>
    </div>
  );
}
