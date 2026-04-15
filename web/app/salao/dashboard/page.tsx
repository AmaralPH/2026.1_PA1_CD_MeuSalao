import Link from "next/link";
import { Bell, Calendar, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AgendaItem from "@/components/agenda-item";
import { saloes } from "@/lib/mock-data";
import { Scissors } from "lucide-react";

export default function DashboardPage() {
  // Mock: dashboard of Salão da Márcia
  const salao = saloes[0];
  const confirmados = salao.agenda.filter((a) => a.status === "confirmado").length;
  const pendentes = salao.agenda.filter((a) => a.status === "pendente").length;

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">MeuSalão</span>
          </div>
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            {pendentes > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
                {pendentes}
              </span>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-500">Olá, Márcia 👋</p>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Banner novo agendamento */}
        <Link href={`/salao/agendamento/${salao.agenda.find(a => a.status === "pendente")?.id ?? "ag3"}?salao=${salao.id}`}>
          <div className="bg-blue-600 rounded-2xl p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Novo agendamento!</p>
              <p className="text-blue-100 text-xs">Juliana M. quer agendar escova simples — 11h</p>
            </div>
            <Badge className="bg-white text-blue-600 hover:bg-white text-xs font-bold">Novo</Badge>
          </div>
        </Link>

        {/* Métricas */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-gray-500">Hoje</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{salao.agenda.length}</p>
            <p className="text-xs text-gray-500">agendamentos</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-500">Confirmados</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{confirmados}</p>
            <p className="text-xs text-gray-500">de {salao.agenda.length} hoje</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="text-xs text-gray-500">Buscas</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{salao.buscasSemana}</p>
            <p className="text-xs text-gray-500">esta semana</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-gray-500">Pendentes</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{pendentes}</p>
            <p className="text-xs text-gray-500">a confirmar</p>
          </div>
        </div>

        {/* Agenda do dia */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900 text-sm">Agenda de hoje</h2>
            <Link href="/salao/perfil" className="text-xs text-blue-600 font-medium">
              Ver perfil público →
            </Link>
          </div>
          <div className="px-3">
            {salao.agenda.map((ag) => (
              <AgendaItem key={ag.id} agendamento={ag} salaoId={salao.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
