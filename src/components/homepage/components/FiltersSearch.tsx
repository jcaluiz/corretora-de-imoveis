"use client";
import amenities from "@/data/amenities";
import diacritics from "diacritics";
import { useContext, useEffect, useState } from "react";
import requestsCities from "@/data/citiesInfo";
import { Context } from "@/store/context/Context";
import getRegions from "@/utils/getRegions";
import getDistrictInfo from "@/utils/getDistrictInfo";
import { Box, Slider } from "@mui/material";

function valuetext(value: number) {
  return `R$ ${value}`;
}

export default function FiltersSearch() {
  const { state, dispatch } = useContext(Context);
  const removeAccents = (text: string) => diacritics.remove(text);
  const [cities, setCities] = useState([]);
  const [municipioSelect, setMunicipioSelect] = useState("Escolha o Município");
  const [districtSelect, setDistrictSelect] = useState<string>("Escolha o Distrito");
  const [value1, setValue1] = useState<number[]>([0, 10]); // Define o estado para o valor do Slider
  const regions = getRegions(cities);
  const [districtInfo, setDistrictInfo] = useState<any[]>([]);

  const minDistance = 10;

  const handleClick = () => {
    dispatch({ type: "MUNICIPIO", payload: municipioSelect });
    dispatch({ type: "DISTRITO", payload: districtSelect });
    
  };

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  useEffect(() => {
    requestsCities(setCities, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const districtSelectInfo = districtInfo.filter(
    ({ municipio }: { municipio: string }) => municipio === municipioSelect
  );
  
  useEffect(() => {
    setDistrictInfo(state.cities);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districtSelectInfo]);

  const handleChange = (value: string) => {
    setMunicipioSelect(value);
    setDistrictSelect('');
    dispatch({ type: "DISTRITO", payload: '' });
  }

  return (
    <section className="bg-black font-text-inter bg-house bg-blend-luminosity h-full bg-cover flex justify-around px-28">
      <div className="h-96 w-80 bg-blue-header">
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
            onChange={(e) => setDistrictSelect(e.target.value)}
            value={districtSelect}
            className="h-10"
          >
            <option>- Escolha o Distrito -</option>
            {districtSelectInfo.map(({ distrito }: { distrito: string }) => (
              <option key={distrito}>{distrito}</option>
            ))}
          </select>
          <select className="h-10">
            <option>- Tipo de Propriedade -</option>
            <option>Casa</option>
            <option>Apartamento</option>
          </select>
          <Box sx={{ width: 300 }}>
            <h3 className="text-white font-extralight text-sm text-center">
              FAIXA DE PREÇO
            </h3>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              max={10000}
              valueLabelFormat={valuetext}
              disableSwap
            />
          </Box>
          <button
            className="bg-gold-button text-white mx-14 h-10 font-light"
            onClick={handleClick}
          >
            PESQUISAR
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-2">
        <h3 className="text-blue-header font-bold text-lg text-center">
          LOCAÇÃO
        </h3>
        <div className="w-64 bg-white pl-5 py-3 text-sm flex flex-col gap-2 mb-14">
          {regions.map((region: string) => (
            <div
              key={removeAccents(region).toLowerCase().replace(/\s/gm, "-")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                id={removeAccents(region).toLowerCase().replace(/\s/gm, "-")}
              />
              <label
                htmlFor={removeAccents(region)
                  .toLowerCase()
                  .replace(/\s/gm, "-")}
              >
                {region}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col pt-2">
        <h3 className="text-blue-header font-bold text-lg text-center">
          FACILIDADES
        </h3>
        <div className="w-64 bg-white pl-5 text-sm flex flex-col gap-2 py-5">
          {amenities.map(({ facility }) => (
            <div
              key={removeAccents(facility).toLowerCase().replace(/\s/gm, "-")}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                id={removeAccents(facility).toLowerCase().replace(/\s/gm, "-")}
              />
              <label
                htmlFor={removeAccents(facility)
                  .toLowerCase()
                  .replace(/\s/gm, "-")}
              >
                {facility}
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
