import { notFound } from "next/navigation";
import { User, Clock, Scissors, CheckCircle, Phone, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { saloes } from "@/lib/mock-data";

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
    <div className="min-h-screen bg-gray-50">
      <Navbar paginaAtiva="inicio" ladoSalao />

      <div className="max-w-2xl mx-auto px-6 py-8">
        <Link href="/salao/dashboard" className="flex items-center gap-1 text-gray-500 hover:text-gray-700 mb-6 text-sm">
          <ChevronLeft className="w-4 h-4" />
          Voltar ao dashboard
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Detalhe do agendamento</h1>
          <span
            className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
              agendamento.status === "confirmado"
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {agendamento.status === "confirmado" ? "Confirmado" : "Aguardando confirmação"}
          </span>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">Cliente</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{agendamento.cliente}</p>
                <p className="text-sm text-gray-500">Cliente da plataforma</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>Lembrete enviado automaticamente</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">Serviço</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Scissors className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{agendamento.servico}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Hoje às {agendamento.hora}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {agendamento.status === "pendente" ? (
          <Link href="/salao/dashboard">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-colors text-lg flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Confirmar agendamento
            </button>
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-green-50 border border-green-100 rounded-2xl py-5">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <p className="text-green-700 font-semibold">Agendamento já confirmado</p>
          </div>
        )}
      </div>
    </div>
  );
}
