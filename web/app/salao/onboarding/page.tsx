"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, CheckCircle, Upload, Plus, Trash2, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

type ServicoCadastro = { nome: string; preco: string; duracao: string };

export default function OnboardingPage() {
  const router = useRouter();
  const [passo, setPasso] = useState(1);
  const [nomeSalao, setNomeSalao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servicos, setServicos] = useState<ServicoCadastro[]>([{ nome: "", preco: "", duracao: "" }]);
  const progresso = (passo / 3) * 100;

  function adicionarServico() { setServicos([...servicos, { nome: "", preco: "", duracao: "" }]); }
  function removerServico(i: number) { setServicos(servicos.filter((_, idx) => idx !== i)); }
  function atualizarServico(i: number, campo: keyof ServicoCadastro, valor: string) {
    const novo = [...servicos]; novo[i][campo] = valor; setServicos(novo);
  }

  // suppress unused variable warnings for form fields
  void nomeSalao; void endereco; void telefone;

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col md:flex-row">
      {/* Left panel */}
      <div className="md:w-2/5 bg-gradient-to-br from-purple-700 to-purple-500 flex flex-col items-center justify-center p-12 text-white min-h-[30vh] md:min-h-screen">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">MeuSalão</h1>
        <p className="text-purple-100 text-center text-sm leading-relaxed max-w-xs">
          Cadastre seu salão em minutos e comece a receber agendamentos hoje
        </p>
        <div className="mt-8 space-y-3 w-full max-w-xs">
          {["Perfil público com avaliações", "Agendamentos sem WhatsApp", "Lembretes automáticos"].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-purple-200 shrink-0" />
              <span className="text-sm text-purple-100">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div className="md:w-3/5 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">
          {/* Progress */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Passo {passo} de 3</span>
            <span className="text-sm font-semibold text-purple-600">{Math.round(progresso)}%</span>
          </div>
          <Progress value={progresso} className="h-2 mb-8 [&>div]:bg-purple-600" />

          {/* Passo 1 */}
          {passo === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bem-vindo!</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">Vamos cadastrar seu salão em 3 passos simples.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ n: "1", t: "Dados" }, { n: "2", t: "Serviços" }, { n: "3", t: "Publicar" }].map((s) => (
                  <div key={s.n} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">{s.n}</div>
                    <span className="text-xs text-gray-500">{s.t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Passo 2 */}
          {passo === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Dados do salão</h2>
              <p className="text-gray-500 mb-6">Informações que aparecem no seu perfil público.</p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nome do salão *</label>
                  <input placeholder="Ex: Salão da Márcia" value={nomeSalao} onChange={(e) => setNomeSalao(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Endereço *</label>
                  <input placeholder="Ex: Rua das Flores, 142 — Bela Vista" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Telefone / WhatsApp</label>
                  <input placeholder="(11) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* Passo 3 */}
          {passo === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Seus serviços</h2>
              <p className="text-gray-500 mb-4">Adicione os serviços com preços e duração.</p>
              <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-purple-200 rounded-xl py-3 px-4 mb-5 text-sm text-purple-500 hover:border-purple-400 hover:bg-purple-50 transition-colors">
                <Upload className="w-4 h-4" />
                Importar lista via planilha (CSV)
              </button>
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {servicos.map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">Serviço {i + 1}</span>
                      {servicos.length > 1 && <button onClick={() => removerServico(i)}><Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" /></button>}
                    </div>
                    <input placeholder="Nome do serviço" value={s.nome} onChange={(e) => atualizarServico(i, "nome", e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                    <div className="grid grid-cols-2 gap-2">
                      <input placeholder="Preço (R$)" value={s.preco} onChange={(e) => atualizarServico(i, "preco", e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200" />
                      <input placeholder="Duração (min)" value={s.duracao} onChange={(e) => atualizarServico(i, "duracao", e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200" />
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={adicionarServico} className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 mt-3 text-sm text-gray-600 hover:border-purple-200 hover:bg-purple-50 transition-colors">
                <Plus className="w-4 h-4" />Adicionar serviço
              </button>
            </div>
          )}

          {/* Footer buttons */}
          <div className="mt-8">
            {passo < 3 ? (
              <button onClick={() => setPasso(passo + 1)} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-colors">
                {passo === 1 ? "Começar cadastro" : "Próximo"}
              </button>
            ) : (
              <button onClick={() => router.push("/salao/dashboard")} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-colors">
                Publicar meu salão
              </button>
            )}
            {passo > 1 && (
              <button onClick={() => setPasso(passo - 1)} className="w-full mt-3 text-sm text-gray-400 py-2 hover:text-gray-600 flex items-center justify-center gap-1">
                <ChevronLeft className="w-4 h-4" />Voltar
              </button>
            )}
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600">← Voltar ao início</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
