import Link from "next/link";
import { MapPin, Clock, Calendar } from "lucide-react";
import BackHeader from "@/components/back-header";
import { Button } from "@/components/ui/button";
import { getSalao, formatarDataCompleta } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default async function ConfirmarPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ servico?: string; dia?: string; hora?: string }>;
}) {
  const { id } = await params;
  const { servico: servicoId, dia, hora } = await searchParams;

  const salao = getSalao(id);
  if (!salao || !servicoId || !dia || !hora) notFound();

  const servico = salao.servicos.find((s) => s.id === servicoId);
  if (!servico) notFound();

  const sucesso = `/cliente/sucesso?salao=${id}&servico=${servicoId}&dia=${dia}&hora=${hora}`;

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <BackHeader titulo="Confirmar agendamento" href={`/cliente/${id}/agendar?servico=${servicoId}`} />

      <div className="px-4 py-6">
        <h2 className="font-semibold text-gray-900 mb-4">Resumo do agendamento</h2>

        {/* Card resumo */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-4">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Salão</p>
            <p className="font-semibold text-gray-900">{salao.nome}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-gray-400" />
              <p className="text-xs text-gray-500">{salao.endereco}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-400 mb-0.5">Serviço</p>
            <p className="font-semibold text-gray-900">{servico.nome}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3 text-gray-400" />
              <p className="text-xs text-gray-500">{servico.duracao} minutos</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-400 mb-0.5">Data e horário</p>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-500" />
              <p className="font-semibold text-gray-900 capitalize">{formatarDataCompleta(dia)}</p>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <p className="font-semibold text-gray-900">{hora}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-lg font-bold text-gray-900">R$ {servico.preco}</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mb-6">
          Ao confirmar, você receberá um lembrete automático 24h antes do atendimento.
        </p>

        <Link href={sucesso}>
          <Button className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700">
            Confirmar agendamento
          </Button>
        </Link>
      </div>
    </div>
  );
}
