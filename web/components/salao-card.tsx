import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import type { Salao } from "@/lib/mock-data";

export default function SalaoCard({ salao }: { salao: Salao }) {
  return (
    <Link href={`/cliente/${salao.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
        {/* Photo area */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={salao.foto}
            alt={salao.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Info */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{salao.nome}</h3>
          <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-medium text-gray-700">{salao.nota}</span>
              <span className="text-gray-400">({salao.totalAvaliacoes})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{salao.distancia}</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-400">A partir de</p>
              <p className="text-purple-600 font-bold text-lg">R$ {salao.precoMinimo}</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors">
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
