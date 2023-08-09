"use client";
import CheckScreenSmallMd from "@/hooks/CheckScreenSmallMd";
import { Context } from "@/store/context/Context";
import { Play } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function SmallerHeader() {
  const {state} = useContext(Context);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    
    // CheckScreenSmallMd()
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!state.isScreenSmallMd && (
        <header className="h-10 bg-gray-header flex justify-center gap-10 items-center font-text-inter">
          <Link
            href="/add-property"
            className="text-black font-bold text-base hover:text-yellow-700"
          >
            ADICIONAR PROPRIEDADE
          </Link>
          <Link
            href="/"
            className="text-black font-bold text-base flex gap-1 hover:text-yellow-700"
          >
            SOBRE NÓS <Play className="fill-black w-3 transform rotate-90" />
          </Link>
          <Link
            href="/"
            className="text-black font-bold text-base flex gap-1 hover:text-yellow-700"
          >
            CONSELHOS E FERRAMENTAS{" "}
            <Play className="fill-black w-3 transform rotate-90" />
          </Link>
          <Link
            href="/"
            className="text-black font-bold text-base hover:text-yellow-700"
          >
            BLOG
          </Link>
        </header>
      )}
    </>
  );
}
