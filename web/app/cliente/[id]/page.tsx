import { notFound } from "next/navigation";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import ServicoItem from "@/components/servico-item";
import AvaliacaoItem from "@/components/avaliacao-item";
import { getSalao } from "@/lib/mock-data";

export default async function PerfilSalaoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const salao = getSalao(id);
  if (!salao) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar paginaAtiva="inicio" />

      {/* Capa hero */}
      <div className="relative h-72 overflow-hidden">
        <img src={salao.foto} alt={salao.nome} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-6">
          <p className="text-white/70 text-sm mb-1">{salao.tipo}</p>
          <h1 className="text-white font-bold text-3xl">{salao.nome}</h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white font-semibold">{salao.nota}</span>
              <span className="text-white/70 text-sm">({salao.totalAvaliacoes} avaliações)</span>
            </div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{salao.distancia}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sobre */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-xl mb-3">Sobre o salão</h2>
              <p className="text-gray-600 leading-relaxed">{salao.descricao}</p>
            </div>

            {/* Serviços */}
            <div>
              <h2 className="font-bold text-gray-900 text-xl mb-4">Serviços Disponíveis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {salao.servicos.map((servico) => (
                  <ServicoItem key={servico.id} servico={servico} salaoId={salao.id} />
                ))}
              </div>
            </div>

            {/* Avaliações */}
            <div>
              <h2 className="font-bold text-gray-900 text-xl mb-4">
                Avaliações dos Clientes
              </h2>
              <div className="space-y-4">
                {salao.avaliacoes.map((av) => (
                  <AvaliacaoItem key={av.id} avaliacao={av} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Informações</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{salao.endereco}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                  <span className="text-gray-600">{salao.horarioFuncionamento}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-500 shrink-0" />
                  <span className="text-gray-600">{salao.telefone}</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-1">A partir de</p>
                <p className="text-2xl font-bold text-purple-600">R$ {salao.precoMinimo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
