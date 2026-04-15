import Link from "next/link";
import { Calendar, TrendingUp, Users, DollarSign, Plus, Bell } from "lucide-react";
import Navbar from "@/components/navbar";
import AgendaItem from "@/components/agenda-item";
import { saloes } from "@/lib/mock-data";

export default function DashboardPage() {
  const salao = saloes[0];
  const confirmados = salao.agenda.filter((a) => a.status === "confirmado").length;
  const pendentes = salao.agenda.filter((a) => a.status === "pendente").length;

  const metricas = [
    { icon: Calendar, label: "Agendamentos Hoje", valor: salao.agenda.length.toString(), cor: "bg-blue-500" },
    { icon: TrendingUp, label: "Esta Semana", valor: "23", cor: "bg-purple-500" },
    { icon: Users, label: "Total de Clientes", valor: "156", cor: "bg-pink-500" },
    { icon: DollarSign, label: "Receita do Mês", valor: "R$ 8.4k", cor: "bg-green-500" },
  ];

  const acoes = [
    { icon: Plus, label: "Novo Agendamento", desc: "Adicionar cliente manualmente", href: "/salao/dashboard" },
    { icon: Calendar, label: "Gerenciar Serviços", desc: "Editar preços e horários", href: "/salao/perfil" },
  ];

  // suppress unused variable warning
  void confirmados;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar paginaAtiva="inicio" ladoSalao />

      {/* Purple hero banner */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{salao.nome}</h1>
            <p className="text-purple-100 mt-1">Dashboard do Salão</p>
          </div>
          {pendentes > 0 && (
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <Bell className="w-4 h-4" />
              {pendentes} pendente{pendentes > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metricas.map(({ icon: Icon, label, valor, cor }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className={`w-12 h-12 ${cor} rounded-2xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{valor}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {acoes.map(({ icon: Icon, label, desc, href }) => (
            <Link key={label} href={href}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-purple-200 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <p className="font-bold text-gray-900">{label}</p>
                <p className="text-sm text-gray-500 mt-1">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Agenda do dia */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-lg">Agenda de hoje</h2>
            <Link href="/salao/perfil" className="text-sm text-purple-600 font-medium hover:text-purple-700">
              Ver perfil público →
            </Link>
          </div>
          <div className="px-4 py-2">
            {salao.agenda.map((ag) => (
              <AgendaItem key={ag.id} agendamento={ag} salaoId={salao.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
