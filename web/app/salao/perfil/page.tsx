import Link from "next/link";
import { Star, MapPin, Clock, Phone, Eye, TrendingUp, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AvaliacaoItem from "@/components/avaliacao-item";
import { saloes } from "@/lib/mock-data";

export default function PerfilPublicoPage() {
  const salao = saloes[0]; // Salão da Márcia

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <Link href="/salao/dashboard" className="p-1 -ml-1 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </Link>
        <h1 className="font-semibold text-gray-900 text-base flex-1">Meu perfil público</h1>
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">Publicado</Badge>
      </header>

      {/* Banner de visibilidade */}
      <div className="mx-4 mt-4 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-3">
        <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium text-blue-800">
            Seu salão apareceu em <span className="font-bold">{salao.buscasSemana} buscas</span> esta semana
          </p>
          <p className="text-xs text-blue-600 mt-0.5">Clientes da região estão te encontrando!</p>
        </div>
      </div>

      {/* Aviso de visualização */}
      <div className="mx-4 mt-2 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2 flex items-center gap-2">
        <Eye className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <p className="text-xs text-amber-700">Esta é a visão que seus clientes têm do seu salão.</p>
      </div>

      {/* Capa */}
      <div className={`${salao.corCapa} h-44 relative mt-3`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-white font-bold text-xl">{salao.nome}</h1>
          <p className="text-white/80 text-sm">{salao.tipo}</p>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-gray-900">{salao.nota}</span>
            <span className="text-sm text-gray-400">({salao.totalAvaliacoes} avaliações)</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>{salao.distancia}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{salao.descricao}</p>
        <div className="flex flex-col gap-1.5 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{salao.endereco}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>{salao.horarioFuncionamento}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>{salao.telefone}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex flex-wrap gap-2">
          {salao.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Serviços */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-3">Serviços</h2>
        <div className="space-y-0">
          {salao.servicos.map((s, i) => (
            <div key={s.id}>
              <div className="flex items-center justify-between py-2.5">
                <div>
                  <p className="text-sm font-medium text-gray-900">{s.nome}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{s.duracao} min</span>
                  </div>
                </div>
                <span className="font-semibold text-gray-900 text-sm">R$ {s.preco}</span>
              </div>
              {i < salao.servicos.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>

      {/* Avaliações */}
      <div className="px-4 py-4 pb-8">
        <h2 className="font-semibold text-gray-900 mb-3">
          Avaliações <span className="text-gray-400 font-normal text-sm">({salao.totalAvaliacoes})</span>
        </h2>
        {salao.avaliacoes.map((av) => (
          <AvaliacaoItem key={av.id} avaliacao={av} />
        ))}
      </div>
    </div>
  );
}
