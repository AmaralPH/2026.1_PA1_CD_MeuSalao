import { Badge } from "@/components/ui/badge";
import type { AgendamentoSalao } from "@/lib/mock-data";

export default function AgendaItem({ agendamento, salaoId }: { agendamento: AgendamentoSalao; salaoId: string }) {
  return (
    <a href={`/salao/agendamento/${agendamento.id}?salao=${salaoId}`}>
      <div className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 active:bg-gray-50 rounded-lg px-1 transition-colors">
        <div className="w-14 text-center shrink-0">
          <span className="font-semibold text-gray-900 text-sm">{agendamento.hora}</span>
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-900 text-sm">{agendamento.cliente}</p>
          <p className="text-xs text-gray-500">{agendamento.servico}</p>
        </div>
        <Badge
          variant={agendamento.status === "confirmado" ? "default" : "secondary"}
          className={`text-xs shrink-0 ${agendamento.status === "confirmado" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-amber-100 text-amber-700 hover:bg-amber-100"}`}
        >
          {agendamento.status === "confirmado" ? "Confirmado" : "Pendente"}
        </Badge>
      </div>
    </a>
  );
}
