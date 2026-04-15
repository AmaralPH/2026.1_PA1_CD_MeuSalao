import Link from "next/link";
import { Sparkles, Home, User, Store } from "lucide-react";

interface NavbarProps {
  paginaAtiva?: "inicio" | "perfil" | "salao";
  ladoSalao?: boolean;
}

export default function Navbar({ paginaAtiva, ladoSalao = false }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">MeuSalão</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-2">
          {!ladoSalao ? (
            <>
              <Link
                href="/cliente"
                className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  paginaAtiva === "inicio"
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Home className="w-4 h-4" />
                Início
              </Link>
              <Link
                href="/cliente"
                className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  paginaAtiva === "perfil"
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <User className="w-4 h-4" />
                Meu Perfil
              </Link>
              <Link
                href="/salao/onboarding"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-colors"
              >
                <Store className="w-4 h-4" />
                Sou Salão
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/salao/dashboard"
                className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  paginaAtiva === "inicio"
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Home className="w-4 h-4" />
                Dashboard
              </Link>
              <Link
                href="/salao/perfil"
                className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  paginaAtiva === "salao"
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Store className="w-4 h-4" />
                Serviços
              </Link>
              <Link
                href="/cliente"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-colors"
              >
                <User className="w-4 h-4" />
                Sou Cliente
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
