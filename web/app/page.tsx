import Link from "next/link";
import { Sparkles, Search, CalendarCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col md:flex-row">
      {/* Left — purple branding panel */}
      <div className="md:w-1/2 bg-gradient-to-br from-purple-700 to-purple-500 flex flex-col items-center justify-center p-12 text-white min-h-[40vh] md:min-h-screen">
        <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center mb-8">
          <Sparkles className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Bem-vindo ao MeuSalão
        </h1>
        <p className="text-purple-100 text-center text-lg leading-relaxed max-w-xs">
          A melhor plataforma para serviços de beleza
        </p>
      </div>

      {/* Right — action card */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Descubra</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Encontre os melhores salões de beleza perto de você com avaliações reais
          </p>

          {/* Feature icons */}
          <div className="flex justify-around mb-10">
            {[
              { icon: Search, label: "Buscar" },
              { icon: Sparkles, label: "Comparar" },
              { icon: CalendarCheck, label: "Agendar" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-6 h-2 bg-purple-600 rounded-full" />
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/cliente">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-colors text-lg">
                Sou Cliente
              </button>
            </Link>
            <Link href="/salao/onboarding">
              <button className="w-full border-2 border-purple-200 text-purple-700 font-bold py-4 rounded-2xl hover:bg-purple-50 transition-colors text-lg">
                Sou Dono de Salão
              </button>
            </Link>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">Protótipo MVP Fase 1 · 2026</p>
        </div>
      </div>
    </div>
  );
}
