import { Star } from "lucide-react";
import type { Avaliacao } from "@/lib/mock-data";

export default function AvaliacaoItem({ avaliacao }: { avaliacao: Avaliacao }) {
  const inicial = avaliacao.cliente.charAt(0).toUpperCase();
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">{inicial}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{avaliacao.cliente}</p>
            <p className="text-xs text-gray-400">{avaliacao.data}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < avaliacao.nota ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed ml-13 pl-[52px]">{avaliacao.texto}</p>
    </div>
  );
}
