"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Store, CheckCircle, Upload, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Scissors } from "lucide-react";

type ServicoCadastro = { nome: string; preco: string; duracao: string };

export default function OnboardingPage() {
  const router = useRouter();
  const [passo, setPasso] = useState(1);

  // Passo 1 — dados do salão
  const [nomeSalao, setNomeSalao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  // Passo 3 — serviços
  const [servicos, setServicos] = useState<ServicoCadastro[]>([
    { nome: "", preco: "", duracao: "" },
  ]);

  const progresso = (passo / 3) * 100;

  function adicionarServico() {
    setServicos([...servicos, { nome: "", preco: "", duracao: "" }]);
  }

  function removerServico(i: number) {
    setServicos(servicos.filter((_, idx) => idx !== i));
  }

  function atualizarServico(i: number, campo: keyof ServicoCadastro, valor: string) {
    const novo = [...servicos];
    novo[i][campo] = valor;
    setServicos(novo);
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">MeuSalão</span>
          </Link>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Passo {passo} de 3</span>
          <span className="text-xs font-medium text-blue-600">{Math.round(progresso)}%</span>
        </div>
        <Progress value={progresso} className="h-1.5" />
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {/* PASSO 1 — Boas-vindas */}
        {passo === 1 && (
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Cadastre seu salão
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Em menos de 2 minutos, seu salão estará online recebendo agendamentos de clientes da sua região.
            </p>
            <div className="w-full text-left space-y-3 mb-8">
              {[
                "Perfil público com seus serviços e avaliações",
                "Clientes agendam direto, sem precisar ligar",
                "Lembretes automáticos que reduzem faltas",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASSO 2 — Dados do salão */}
        {passo === 2 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Dados do salão</h2>
            <p className="text-sm text-gray-500 mb-6">Essas informações aparecem no seu perfil público.</p>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Nome do salão *</label>
                <Input
                  placeholder="Ex: Salão da Márcia"
                  value={nomeSalao}
                  onChange={(e) => setNomeSalao(e.target.value)}
                  className="h-11"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Endereço *</label>
                <Input
                  placeholder="Ex: Rua das Flores, 142 — Bela Vista"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  className="h-11"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Telefone / WhatsApp</label>
                <Input
                  placeholder="(11) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="h-11"
                />
              </div>
            </div>
          </div>
        )}

        {/* PASSO 3 — Serviços */}
        {passo === 3 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Seus serviços</h2>
            <p className="text-sm text-gray-500 mb-4">Adicione os serviços que você oferece com preços e duração.</p>

            {/* Importar CSV */}
            <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl py-3 px-4 mb-5 text-sm text-gray-500 hover:border-blue-300 hover:text-blue-500 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Importar lista de serviços via planilha (CSV)</span>
            </button>

            <div className="space-y-3">
              {servicos.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500">Serviço {i + 1}</span>
                    {servicos.length > 1 && (
                      <button onClick={() => removerServico(i)}>
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Nome do serviço"
                      value={s.nome}
                      onChange={(e) => atualizarServico(i, "nome", e.target.value)}
                      className="h-9 bg-white text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Preço (R$)"
                        value={s.preco}
                        onChange={(e) => atualizarServico(i, "preco", e.target.value)}
                        className="h-9 bg-white text-sm"
                      />
                      <Input
                        placeholder="Duração (min)"
                        value={s.duracao}
                        onChange={(e) => atualizarServico(i, "duracao", e.target.value)}
                        className="h-9 bg-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={adicionarServico}
              className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 mt-3 text-sm text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar serviço</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-100">
        {passo < 3 ? (
          <Button
            onClick={() => setPasso(passo + 1)}
            disabled={passo === 2 && !nomeSalao && !endereco}
            className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700"
          >
            {passo === 1 ? "Começar cadastro" : "Próximo"}
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/salao/dashboard")}
            className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700"
          >
            Publicar meu salão
          </Button>
        )}
        {passo > 1 && (
          <button
            onClick={() => setPasso(passo - 1)}
            className="w-full mt-2 text-sm text-gray-400 py-2"
          >
            Voltar
          </button>
        )}
      </div>
    </div>
  );
}
