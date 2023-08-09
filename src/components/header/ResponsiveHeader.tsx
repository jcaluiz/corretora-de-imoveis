"use client";
import { Context } from "@/store/context/Context";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function ResponsiveHeader() {
  const { state } = useContext(Context);
  const [isActiveButton, setIsActiveButton] = useState(false);
  console.log(isActiveButton);
  return (
    <>
      {state.isScreenSmallMd && (
        <header className="bg-blue-header h-40 flex items-center justify-around font-text-inter z-10">
          <Image
            src="/images/header/logo.svg"
            width={250}
            height={250}
            alt="Imagem da logo"
          />
          <button
            className="flex"
            onClick={() => setIsActiveButton((prev) => !prev)}
          >
            <Menu className="text-white" size={80} />
          </button>
          {isActiveButton && (
            <div className="top-40 h-screen w-screen bg-blue-header absolute">
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="text-white text-3xl w-screen text-center py-9 border-b"
                >
                  INÍCIO
                </Link>
                {/* <div className="border w-screen" /> */}
                <Link
                  href="/sales"
                  className="text-white text-3xl w-screen text-center py-9 border-b"
                >
                  VENDAS
                </Link>
                <Link
                  href="/long-term-rentals"
                  className="text-white text-3xl w-screen text-center py-9 border-b"
                >
                  ALUGUÉIS DE LONGO PRAZO
                </Link>
                <Link
                  href="/commercial-rentals"
                  className="text-white text-3xl w-screen text-center py-9 border-b"
                >
                  ALUGUÉIS COMERCIAIS
                </Link>
                <Link
                  href="/recently-reduced"
                  className="text-white text-3xl w-screen text-center py-9 border-b"
                >
                  RECENTEMENTE REDUZIDO
                </Link>
                <Link
                  href="/contact"
                  className="text-white text-3xl w-screen text-center py-9 border-b"
                >
                  CONTATO
                </Link>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
}
