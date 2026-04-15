import { Star } from "lucide-react";
import type { Avaliacao } from "@/lib/mock-data";

export default function AvaliacaoItem({ avaliacao }: { avaliacao: Avaliacao }) {
  return (
    <div className="py-3 border-b border-gray-50 last:border-0">
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium text-sm text-gray-900">{avaliacao.cliente}</span>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < avaliacao.nota ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{avaliacao.texto}</p>
      <p className="text-xs text-gray-400 mt-1">{avaliacao.data}</p>
    </div>
  );
}
