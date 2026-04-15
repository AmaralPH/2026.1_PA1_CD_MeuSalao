import Link from "next/link";
import { CheckCircle, Calendar, Clock, MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSalao, formatarDataCompleta } from "@/lib/mock-data";

export default async function SucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ salao?: string; servico?: string; dia?: string; hora?: string }>;
}) {
  const { salao: salaoId, servico: servicoId, dia, hora } = await searchParams;

  const salao = salaoId ? getSalao(salaoId) : null;
  const servico = salao?.servicos.find((s) => s.id === servicoId);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Ícone de sucesso */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Agendamento confirmado!
        </h1>
        <p className="text-gray-500 text-sm text-center mb-8">
          Seu horário foi reservado com sucesso.
        </p>

        {/* Resumo compacto */}
        {salao && servico && dia && hora && (
          <div className="w-full bg-gray-50 rounded-2xl p-4 mb-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${salao.corCapa} rounded-xl shrink-0`} />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{salao.nome}</p>
                <p className="text-xs text-gray-500">{servico.nome}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-3 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="capitalize">{formatarDataCompleta(dia)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{hora} · {servico.duracao} min</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{salao.endereco}</span>
              </div>
            </div>
          </div>
        )}

        {/* Aviso lembrete */}
        <div className="w-full bg-blue-50 rounded-xl px-4 py-3 flex items-start gap-2 mb-8">
          <Bell className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
          <p className="text-xs text-blue-600 leading-relaxed">
            Você receberá um lembrete automático 24h antes do seu atendimento.
          </p>
        </div>

        <Link href="/cliente" className="w-full">
          <Button variant="outline" className="w-full h-11 border-gray-200 text-gray-700">
            Buscar outro salão
          </Button>
        </Link>
      </div>
    </div>
  );
}
