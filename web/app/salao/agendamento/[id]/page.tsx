import { notFound } from "next/navigation";
import { User, Clock, Scissors, CheckCircle, Phone } from "lucide-react";
import BackHeader from "@/components/back-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { saloes } from "@/lib/mock-data";
import Link from "next/link";

export default async function DetalheAgendamentoPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ salao?: string }>;
}) {
  const { id } = await params;
  const { salao: salaoId } = await searchParams;

  const salao = saloes.find((s) => s.id === salaoId) ?? saloes[0];
  const agendamento = salao.agenda.find((a) => a.id === id);
  if (!agendamento) notFound();

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <BackHeader titulo="Detalhe do agendamento" href="/salao/dashboard" />

      <div className="px-4 py-6">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-6">
          <Badge
            className={`text-sm px-3 py-1 ${
              agendamento.status === "confirmado"
                ? "bg-green-100 text-green-700 hover:bg-green-100"
                : "bg-amber-100 text-amber-700 hover:bg-amber-100"
            }`}
          >
            {agendamento.status === "confirmado" ? "Confirmado" : "Aguardando confirmação"}
          </Badge>
          <span className="text-sm font-semibold text-gray-900">{agendamento.hora}</span>
        </div>

        {/* Dados do cliente */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-4">
          <p className="text-xs text-gray-400 mb-3">Cliente</p>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{agendamento.cliente}</p>
              <p className="text-xs text-gray-500">Cliente da plataforma</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Phone className="w-3.5 h-3.5" />
            <span>Lembrete enviado automaticamente</span>
          </div>
        </div>

        {/* Dados do serviço */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
          <p className="text-xs text-gray-400 mb-3">Serviço</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Scissors className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{agendamento.servico}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">Hoje às {agendamento.hora}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ação */}
        {agendamento.status === "pendente" ? (
          <Link href="/salao/dashboard">
            <Button className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 gap-2">
              <CheckCircle className="w-5 h-5" />
              Confirmar agendamento
            </Button>
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-2 bg-green-50 rounded-2xl py-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-700 font-medium text-sm">Agendamento já confirmado</p>
          </div>
        )}
      </div>
    </div>
  );
}
