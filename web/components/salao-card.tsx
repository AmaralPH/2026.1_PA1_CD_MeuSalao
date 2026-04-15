import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Salao } from "@/lib/mock-data";

export default function SalaoCard({ salao }: { salao: Salao }) {
  return (
    <Link href={`/cliente/${salao.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 active:scale-[0.98] transition-transform">
        {/* Capa colorida */}
        <div className={`${salao.corCapa} h-28 relative`}>
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700">
              {salao.tipo}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h2 className="font-semibold text-gray-900 text-base">{salao.nome}</h2>
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sm font-medium text-gray-700">{salao.nota}</span>
              <span className="text-xs text-gray-400">({salao.totalAvaliacoes})</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
            <MapPin className="w-3 h-3" />
            <span>{salao.distancia} • {salao.endereco.split("—")[0].trim()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1 flex-wrap">
              {salao.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="text-sm font-semibold text-blue-600 shrink-0">
              a partir de R$ {salao.precoMinimo}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
