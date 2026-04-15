"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import SalaoCard from "@/components/salao-card";
import { saloes, TAGS_FILTRO } from "@/lib/mock-data";
import Link from "next/link";
import { Scissors } from "lucide-react";

export default function ClientePage() {
  const [busca, setBusca] = useState("");
  const [tagSelecionada, setTagSelecionada] = useState<string | null>(null);

  const saloesFiltrados = saloes.filter((s) => {
    const matchBusca =
      !busca ||
      s.nome.toLowerCase().includes(busca.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(busca.toLowerCase()));
    const matchTag = !tagSelecionada || s.tags.includes(tagSelecionada);
    return matchBusca && matchTag;
  });

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 pt-4 pb-3">
        <div className="flex items-center gap-2 mb-3">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">MeuSalão</span>
          </Link>
          <div className="flex-1" />
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
        </div>
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Buscar salão ou serviço..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-9 bg-gray-50 border-gray-100 text-sm h-9"
          />
        </div>
        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setTagSelecionada(null)}
            className={`shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
              !tagSelecionada
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
          >
            Todos
          </button>
          {TAGS_FILTRO.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagSelecionada(tag === tagSelecionada ? null : tag)}
              className={`shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
                tagSelecionada === tag
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Listing */}
      <div className="px-4 py-4">
        <p className="text-xs text-gray-400 mb-3">
          {saloesFiltrados.length} salão{saloesFiltrados.length !== 1 ? "s" : ""} encontrado{saloesFiltrados.length !== 1 ? "s" : ""} perto de você
        </p>
        <div className="flex flex-col gap-4">
          {saloesFiltrados.length > 0 ? (
            saloesFiltrados.map((salao) => <SalaoCard key={salao.id} salao={salao} />)
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-sm">Nenhum salão encontrado para &quot;{busca}&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
