"use client";
import properties from "@/data/properties.json";
import { Context } from "@/store/context/Context";
import { BedSingle, ChefHat, MapPin } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function PropertiesRender() {
  const { state } = useContext(Context);
  const [houses, setHouses] = useState<any[]>([]);
  const [newHouses, setNewHouses] = useState<any[]>([]);

  useEffect(() => {
    
    setHouses(properties)
    setTimeout(() => setNewHouses(properties), 500);
  }, []);

  useEffect(() => {
    const info = (state.municipio === "- Escolha o Município -" 
    || state.municipio === '') ? houses : houses
    .filter((item) => item.local.municipio.includes(state.municipio) && item.local.distrito.includes(state.distrito))
    setNewHouses(info);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.municipio, state.distrito]);

  return (
    <section className="flex flex-col font-text-inter px-40 py-10">
      <h1 className="text-2xl">Propriedades em destaque</h1>
      <div className="border-t pb-10" />
      <section className="flex gap-5">
        {newHouses && newHouses.map((property) => (
          <div key={property.id} className="flex border pb-2 px-2">
            <div className="flex flex-col">
              <Image
                src="https://www.tuacasa.com.br/wp-content/uploads/2015/06/fachadas-de-casas-000.jpg"
                alt={property.imovel.titulo}
                width={250}
                height={250}
              />
              {/* <div className="h10 bg-blue-header text-white">{property.imovel.titulo}</div> */}
              <div className="border-b pb-5" />
              <div className="flex justify-between">
                <div className="flex text-xs gap-1 text-zinc-700 items-center">
                  <BedSingle size={20} />
                  <p>{property.imovel.quarto} Quartos</p>
                </div>
                <div className="flex text-xs gap-1 text-zinc-700 items-center">
                  <ChefHat size={20} />
                  <p>{property.imovel.cozinha} Cozinhas</p>
                </div>
                {property.imovel.quintal && (
                  <div className="flex text-xs gap-1 text-zinc-700 items-center">
                    <p>Tem quintal</p>
                  </div>
                )}
              </div>
              <p className="font-extrabold text-lg text-center">
                {property.imovel.titulo}
              </p>
              <div className="flex items-center justify-between py-5">
                <div className="flex gap-2 text-sm py-3">
                  <MapPin className="text-zinc-600" size={20} />
                  <p className="text-zinc-600">{property.local.bairro}</p>
                </div>
                <p className="text-blue-header/90 font-extrabold">
                  R$ {property.imovel.preco}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
