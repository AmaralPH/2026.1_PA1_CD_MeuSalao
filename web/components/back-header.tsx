import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BackHeaderProps {
  titulo: string;
  href: string;
}

export default function BackHeader({ titulo, href }: BackHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
      <Link href={href} className="p-1 -ml-1 rounded-full hover:bg-gray-100 transition-colors">
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </Link>
      <h1 className="font-semibold text-gray-900 text-base">{titulo}</h1>
    </header>
  );
}
