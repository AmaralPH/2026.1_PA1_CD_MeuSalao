"use client";

import { useState, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Clock } from "lucide-react";
import BackHeader from "@/components/back-header";
import { Button } from "@/components/ui/button";
import { getSalao, DIAS_SEMANA, formatarDia } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default function AgendarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const servicoId = searchParams.get("servico") ?? "";
  const router = useRouter();

  const salaoData = getSalao(id);
  if (!salaoData) notFound();
  const salao = salaoData;

  const servico = salao.servicos.find((s) => s.id === servicoId);

  const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  const podeContinuar = diaSelecionado && horarioSelecionado;

  function handleContinuar() {
    if (!podeContinuar) return;
    router.push(
      `/cliente/${id}/confirmar?servico=${servicoId}&dia=${diaSelecionado}&hora=${horarioSelecionado}`
    );
  }

  function isOcupado(dia: string, hora: string) {
    return salao.horariosOcupados.has(`${dia}|${hora}`);
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <BackHeader titulo="Escolher horário" href={`/cliente/${id}`} />

      {/* Serviço fixado */}
      {servico && (
        <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
          <p className="text-xs text-blue-500 font-medium mb-0.5">Serviço selecionado</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900 text-sm">{servico.nome}</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{servico.duracao} min</span>
              </div>
              <span className="font-bold text-blue-600 text-sm">R$ {servico.preco}</span>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 py-4">
        {/* Seletor de dia */}
        <h2 className="font-semibold text-gray-900 text-sm mb-3">Escolha o dia</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {DIAS_SEMANA.map((dia) => {
            const { diaSemana, dia: diaNum } = formatarDia(dia);
            const selecionado = diaSelecionado === dia;
            return (
              <button
                key={dia}
                onClick={() => {
                  setDiaSelecionado(dia);
                  setHorarioSelecionado(null);
                }}
                className={`shrink-0 flex flex-col items-center w-12 py-2.5 rounded-xl border-2 transition-colors ${
                  selecionado
                    ? "bg-blue-50 border-blue-500 text-blue-600"
                    : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
                }`}
              >
                <span className="text-xs font-medium">{diaSemana}</span>
                <span className={`text-base font-bold mt-0.5 ${selecionado ? "text-blue-600" : "text-gray-900"}`}>
                  {diaNum}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid de horários */}
        {diaSelecionado ? (
          <>
            <h2 className="font-semibold text-gray-900 text-sm mb-3">Escolha o horário</h2>
            <div className="grid grid-cols-4 gap-2">
              {salao.horariosDisponiveis.map((hora) => {
                const ocupado = isOcupado(diaSelecionado, hora);
                const selecionado = horarioSelecionado === hora;
                return (
                  <button
                    key={hora}
                    disabled={ocupado}
                    onClick={() => setHorarioSelecionado(hora)}
                    className={`py-2 rounded-xl text-sm font-medium border-2 transition-colors ${
                      ocupado
                        ? "bg-gray-50 border-gray-100 text-gray-300 line-through cursor-not-allowed"
                        : selecionado
                        ? "bg-blue-50 border-blue-500 text-blue-600"
                        : "bg-white border-gray-100 text-gray-700 hover:border-gray-200"
                    }`}
                  >
                    {hora}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-gray-400 text-sm">
            Selecione um dia para ver os horários disponíveis
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-4">
        <Button
          onClick={handleContinuar}
          disabled={!podeContinuar}
          className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
