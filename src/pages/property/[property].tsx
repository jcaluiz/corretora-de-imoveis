"use client";
import Header from "@/components/Header";
import RequestsProperty from "@/services/RequestsProperty";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import IProperty from "@/interfaces/IProperty";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { Context } from "@/store/context/Context";

export default function Property() {
  const {state} = useContext(Context);
  const [property, setProperty] = useState<IProperty>();
  const requests = new RequestsProperty();
  const router = useRouter();

  const id = router.asPath.replace(/.*\/property\//, "");
  console.log(id);
  console.log(property);

  useEffect(() => {
    const getProperty = async () => {
      const newProperty = await requests.getPropertyById(id);
      setProperty(newProperty);
    };
    getProperty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClick = (e: FormEvent, incrementName: string) => {
    e.preventDefault();
    if (property) {
      const imagesLength = property.imovel.imagens.images.length
      const index: any = {
        'decrement': () => setPhotoIndex((prevent) => (prevent - 1) < 0 ? imagesLength - 1 : prevent -= 1),
        'increment': () => setPhotoIndex((prevent) => (prevent + 1 === imagesLength) ? 0 : prevent += 1),
      }
      // console.log(images.length);
      console.log(incrementName);
      index[incrementName]();
    }
  }

  console.log(photoIndex);

  return (
    <>
      <Header />
      {property && (
        <main className="flex flex-col pt-10 font-text-inter h-screen justify-between">
          <div className={!state.isScreenSmallMd ? "flex justify-around" : "flex flex-col"}>
            <div className={!state.isScreenSmallMd ? "flex flex-col" : "flex flex-col items-center"}>
              <div className="flex items-center relative z-0">
                <button 
                  onClick={(e) => handleClick(e, 'decrement')}
                  className="absolute left-0 opacity-20"
                >
                  <ChevronLeft size={100} />
                </button>
                <Image
                  src={property.imovel.imagens.images[photoIndex]}
                  alt={`Imagem ${property.imovel.titulo}`}
                  width={500}
                  height={500}
                />
                <button 
                  onClick={(e) => handleClick(e, 'increment')}
                  className="absolute right-0 opacity-20"
                >
                  <ChevronRight size={100} />
                </button>
              </div>
              <div>
                <p>
                  Preço: R$ {property.imovel.preco.toFixed(2)} para{" "}
                  {property.imovel.aquisicao}
                </p>
              </div>
            </div>
            <div className="flex flex-col border py-5 px-14 gap-2 text-center bg-gray-header/20">
              <h3 className="text-center text-2xl">
                {property.imovel.titulo} - {property.imovel.aquisicao}
              </h3>
              <h4 className="text-center text-xl py-5">Localização</h4>
              <p>Bairro: {property.local.bairro}</p>
              <p>Distrito: {property.local.distrito}</p>
              <p>Município: {property.local.municipio}</p>
              <h4 className="text-center text-xl py-5">Características</h4>
              <p>Tipo de propriedade: {property.imovel.tipo}</p>
              <p>Quantidade de salas: {property.imovel.sala}</p>
              <p>Quantidade de quartos: {property.imovel.quarto}</p>
              <p>Quantidade de cozinhas: {property.imovel.cozinha}</p>
              {property.imovel.quintal && <p>A propriedade tem quintal</p>}
            </div>
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
