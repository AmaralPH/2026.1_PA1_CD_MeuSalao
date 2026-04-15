"use client";

import { useState } from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/navbar";
import SalaoCard from "@/components/salao-card";
import { saloes, TAGS_FILTRO } from "@/lib/mock-data";

const CATEGORIAS = [
  { emoji: "✂️", label: "Corte", tag: "Cabelo" },
  { emoji: "🎨", label: "Coloração", tag: "Coloração" },
  { emoji: "💅", label: "Manicure", tag: "Manicure" },
  { emoji: "🪒", label: "Barba", tag: "Barba" },
  { emoji: "✨", label: "Estética", tag: "Estética" },
  { emoji: "👶", label: "Infantil", tag: "Infantil" },
];

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
    <div className="min-h-screen bg-gray-50">
      <Navbar paginaAtiva="inicio" />

      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Encontre o Salão Perfeito
          </h1>
          <p className="text-purple-100 text-lg mb-8">
            Descubra, compare e agende serviços de beleza perto de você
          </p>
          <div className="flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar salões ou serviços..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 bg-white shadow-lg"
              />
            </div>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-5 py-3.5 rounded-2xl transition-colors border border-white/30 text-sm backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">São Paulo, SP</span>
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white p-3.5 rounded-2xl transition-colors border border-white/30 backdrop-blur-sm">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Categorias */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat.tag}
                onClick={() => setTagSelecionada(tagSelecionada === cat.tag ? null : cat.tag)}
                className={`bg-white rounded-2xl border p-4 flex flex-col items-center gap-2 transition-all hover:shadow-md ${
                  tagSelecionada === cat.tag
                    ? "border-purple-400 bg-purple-50"
                    : "border-gray-100 hover:border-purple-200"
                }`}
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          <button
            onClick={() => setTagSelecionada(null)}
            className={`shrink-0 text-sm px-4 py-2 rounded-full border transition-colors font-medium ${
              !tagSelecionada
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
          >
            Todos
          </button>
          {TAGS_FILTRO.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagSelecionada(tag === tagSelecionada ? null : tag)}
              className={`shrink-0 text-sm px-4 py-2 rounded-full border transition-colors font-medium ${
                tagSelecionada === tag
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Salon grid */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Próximos a você</h2>
          <span className="text-sm text-gray-500">{saloesFiltrados.length} salões encontrados</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saloesFiltrados.length > 0 ? (
            saloesFiltrados.map((salao) => <SalaoCard key={salao.id} salao={salao} />)
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400">Nenhum salão encontrado para &quot;{busca}&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
