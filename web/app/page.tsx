import Link from "next/link";
import { Scissors, Store } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-16 pb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">MeuSalão</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Bem-vindo!
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Como você quer usar o MeuSalão hoje?
        </p>
      </div>

      {/* Persona cards */}
      <div className="px-6 flex flex-col gap-4 flex-1">
        <Link href="/cliente">
          <div className="bg-blue-600 rounded-2xl p-6 text-white active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-1">Sou cliente</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Encontre salões próximos, compare preços e agende seu horário sem precisar ligar.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium">
              <span>Buscar salões</span>
              <span>→</span>
            </div>
          </div>
        </Link>

        <Link href="/salao/onboarding">
          <div className="bg-gray-900 rounded-2xl p-6 text-white active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <Store className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-1">Sou dono de salão</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cadastre seu salão, receba agendamentos online e ganhe visibilidade na sua região.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-gray-300">
              <span>Cadastrar salão</span>
              <span>→</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="px-6 py-8 text-center">
        <p className="text-xs text-gray-400">Protótipo — MVP Fase 1 · 2026</p>
      </div>
    </div>
  );
}
