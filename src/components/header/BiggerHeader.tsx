"use client";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialMediaButton from "../buttons/SocialMediaButton";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/store/context/Context";

export default function BiggerHeader() {
  const {state} = useContext(Context);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!state.isScreenSmallMd && (
        <header className="bg-blue-header h-40 flex items-center justify-around">
          <div>
            <Image
              src="/images/header/logo.svg"
              width={250}
              height={250}
              alt="Imagem da logo"
            />
          </div>
          <div className="flex gap-3">
            <Link href="/" className="text-white text-xs">
              INÍCIO
            </Link>
            <Link href="/sales" className="text-white text-xs">
              VENDAS
            </Link>
            <Link href="/long-term-rentals" className="text-white text-xs">
              ALUGUÉIS DE LONGO PRAZO
            </Link>
            <Link href="/commercial-rentals" className="text-white text-xs">
              ALUGUÉIS COMERCIAIS
            </Link>
            <Link href="/recently-reduced" className="text-white text-xs">
              RECENTEMENTE REDUZIDO
            </Link>
            <Link href="/contact" className="text-white text-xs">
              CONTATO
            </Link>
          </div>
          <div className="flex w-32 flex-wrap gap-2">
            <SocialMediaButton url="https://www.facebook.com/lacjunior1">
              <Facebook className="fill-blue-header" width={23} height={30} />
            </SocialMediaButton>
            <SocialMediaButton url="https://twitter.com/LuizAlb20728316">
              <Twitter className="fill-blue-header" width={23} height={30} />
            </SocialMediaButton>
            <SocialMediaButton url="https://www.linkedin.com/in/luiz-junior-dev">
              <Linkedin className="fill-blue-header" width={23} height={30} />
            </SocialMediaButton>
            <SocialMediaButton url="https://www.linkedin.com/in/luiz-junior-dev">
              <Image
                src="/images/header/pinterest.svg"
                alt="Imagem da logo do Pinterest"
                className="fill-blue-header"
                width={23}
                height={30}
              />
            </SocialMediaButton>
            <SocialMediaButton url="https://www.linkedin.com/in/luiz-junior-dev">
              <Image
                src="/images/header/google-plus.svg"
                alt="Imagem da logo do Pinterest"
                className="fill-blue-header"
                width={23}
                height={30}
              />
            </SocialMediaButton>
            <SocialMediaButton url="https://www.linkedin.com/in/luiz-junior-dev">
              <Youtube className="text-blue-header" width={23} height={30} />
            </SocialMediaButton>
          </div>
        </header>
      )}
    </>
  );
}
