import { notFound } from "next/navigation";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import BackHeader from "@/components/back-header";
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
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <BackHeader titulo={salao.nome} href="/cliente" />

      {/* Capa */}
      <div className={`${salao.corCapa} h-44 relative`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-white font-bold text-xl">{salao.nome}</h1>
          <p className="text-white/80 text-sm">{salao.tipo}</p>
        </div>
      </div>

      {/* Info card */}
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

      {/* Serviços */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-1">Serviços</h2>
        <p className="text-xs text-gray-400 mb-3">Toque em &quot;Agendar&quot; para reservar seu horário</p>
        <div>
          {salao.servicos.map((servico) => (
            <ServicoItem key={servico.id} servico={servico} salaoId={salao.id} />
          ))}
        </div>
      </div>

      {/* Avaliações */}
      <div className="px-4 py-4 pb-8">
        <h2 className="font-semibold text-gray-900 mb-3">
          Avaliações{" "}
          <span className="text-gray-400 font-normal text-sm">({salao.totalAvaliacoes})</span>
        </h2>
        <div>
          {salao.avaliacoes.map((av) => (
            <AvaliacaoItem key={av.id} avaliacao={av} />
          ))}
        </div>
      </div>
    </div>
  );
}
