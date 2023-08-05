import { Play } from "lucide-react";
import Link from "next/link";

export default function SmallerHeader() {
  return (
    <header className="h-10 bg-gray-header flex justify-center gap-10 items-center font-text-inter">
      <Link href="/add-property" className="text-black font-bold text-base hover:text-yellow-700">
        ADICIONAR PROPRIEDADE
      </Link>
      <Link href="/" className="text-black font-bold text-base flex gap-1 hover:text-yellow-700">
        SOBRE NÓS <Play className="fill-black w-3 transform rotate-90" />
      </Link>
      <Link href="/" className="text-black font-bold text-base flex gap-1 hover:text-yellow-700">
        CONSELHOS E FERRAMENTAS <Play className="fill-black w-3 transform rotate-90" />
      </Link>
      <Link href="/" className="text-black font-bold text-base hover:text-yellow-700">
        BLOG
      </Link>
    </header>
  );
}
