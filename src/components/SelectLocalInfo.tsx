"use client";
import { Context } from "@/store/context/Context";
import { ReactNode, useContext, useEffect, useState } from "react";
import properties from "@/data/properties.json";
// import handler from "@/api/handler";
import pushProperty from "@/services/pushProperty";

interface Props {
  children: ReactNode;
}

export default function SelectLocalInfo({ children }: Props) {
  const { state, dispatch } = useContext(Context);
  const [municipioSelect, setMunicipioSelect] = useState("Escolha o Município");
  const [districtSelect, setDistrictSelect] =
    useState<string>("Escolha o Distrito");
  const [districtInfo, setDistrictInfo] = useState<any[]>([]);

  const districtSelectInfo = districtInfo.filter(
    ({ municipio }: { municipio: string }) => municipio === municipioSelect
  );

  const handleClick = () => {
    dispatch({ type: "MUNICIPIO", payload: municipioSelect });
    dispatch({ type: "DISTRITO", payload: districtSelect });
    pushProperty(state.addProperty);
  };

  useEffect(() => {
    setDistrictInfo(state.cities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districtSelectInfo]);

  const handleChange = (value: string) => {
    setMunicipioSelect(value);
    setDistrictSelect("");
    dispatch({ type: "DISTRITO", payload: "" });
    dispatch({
        type: "ADDPROPERTY",
        payload: {
          ...state.addProperty,
          local: {
            ...state.addProperty.local,
            municipio: value,
          },
        },
      })
  };

  useEffect(() => {
    dispatch({
        type: "ADDPROPERTY",
        payload: {
          ...state.addProperty,
          id: properties.length + 1,
        },
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectDistrito = (value: string) => {
    setDistrictSelect(value)
    dispatch({
        type: "ADDPROPERTY",
        payload: {
          ...state.addProperty,
          local: {
            ...state.addProperty.local,
            distrito: value,
          },
        },
      })
  }

  return (
    <div className="flex flex-col px-5 gap-3 pt-10 text-zinc-700">
      <select
        onChange={(e) => handleChange(e.target.value)}
        value={municipioSelect}
        className="h-10"
      >
        <option>- Escolha o Município -</option>
        {districtInfo
          .map(({ municipio }: { municipio: string }) => municipio)
          .reduce((acc: string[], curr: string) => {
            if (!acc.find((item: string) => item === curr)) {
              acc.push(curr);
            }
            return acc;
          }, [])
          .map((item: string) => (
            <option key={item}>{item}</option>
          ))}
      </select>
      <select
        onChange={(e) => handleSelectDistrito(e.target.value)}
        value={districtSelect}
        className="h-10"
      >
        <option>- Escolha o Distrito -</option>
        {districtSelectInfo.map(({ distrito }: { distrito: string }) => (
          <option key={distrito}>{distrito}</option>
        ))}
      </select>
      <select 
        className="h-10"
        onChange={({target: {value}}) => dispatch({
            type: "ADDPROPERTY",
            payload: {
              ...state.addProperty,
              imovel: {
                ...state.addProperty.imovel,
                tipo: value,
              },
            },
          })}
        >
        <option>- Tipo de Propriedade -</option>
        <option>Casa</option>
        <option>Apartamento</option>
      </select>
      <div className="h-10 text-zinc-700">
            <input
              type="text"
              className="h-10 text-center"
              placeholder="ESCREVA O BAIRRO"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty,
                            local: {
                                ...state.addProperty.local,
                                bairro: e.target.value,
                            }
                        }
                    })}
            />
          </div>
      <button
        className="bg-gold-button text-white mx-14 h-10 font-light"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}
