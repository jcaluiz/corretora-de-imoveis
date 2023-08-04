import { Play } from "lucide-react";
import Link from "next/link";

export default function SmallerHeader() {
  return (
    <header className="h-10 bg-gray-header flex justify-center gap-10 items-center font-text-inter">
      <Link href="/" className="text-black font-bold text-base flex gap-1">
        SOBRE NÓS <Play className="fill-black w-3 transform rotate-90" />
      </Link>
      <Link href="/" className="text-black font-bold text-base flex gap-1">
        CONSELHOS E FERRAMENTAS <Play className="fill-black w-3 transform rotate-90" />
      </Link>
      <Link href="/" className="text-black font-bold text-base">
        BLOG
      </Link>
    </header>
  );
}
