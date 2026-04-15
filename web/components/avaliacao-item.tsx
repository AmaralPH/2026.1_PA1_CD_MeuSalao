import { Star } from "lucide-react";
import type { Avaliacao } from "@/lib/mock-data";

export default function AvaliacaoItem({ avaliacao }: { avaliacao: Avaliacao }) {
  const inicial = avaliacao.cliente.charAt(0).toUpperCase();
  const cores = ["bg-violet-600", "bg-fuchsia-600", "bg-blue-600", "bg-emerald-600", "bg-amber-600"];
  const cor = cores[avaliacao.cliente.charCodeAt(0) % cores.length];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 ${cor} rounded-full flex items-center justify-center shrink-0`}>
          <span className="text-white font-bold text-sm">{inicial}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <p className="font-bold text-gray-900 text-sm truncate">{avaliacao.cliente}</p>
            <div className="flex items-center gap-0.5 shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < avaliacao.nota ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-2">{avaliacao.data}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{avaliacao.texto}</p>
        </div>
      </div>
    </div>
  );
}
