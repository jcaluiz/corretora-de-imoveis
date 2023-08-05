import Header from "@/components/Header";
import SelectLocalInfo from "@/components/SelectLocalInfo";
import { Context } from "@/store/context/Context";
import { useContext } from "react";

export default function AddProperty() {
  const { state, dispatch } = useContext(Context);
  console.log(state.addProperty)
  return (
    <>
      <Header />
      <div className="bg-black font-text-inter bg-house bg-blend-luminosity h-full bg-cover flex justify-around px-28">
        <div className="h-full w-80 pb-10 flex flex-col">
          <div className="flex flex-col px-5 gap-2 pt-10 text-zinc-700">
            <input
              type="text"
              className="h-10 text-center"
              placeholder="TÍTULO PARA A CASA"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty, 
                            imovel: {
                                ...state.addProperty.imovel, 
                                titulo: e.target.value
                            }
                        }
                    })}
            />
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <select 
                className="h-10 text-center"
                onChange={
                    (e) => dispatch({
                            type: 'ADDPROPERTY', 
                            payload: {
                                ...state.addProperty, 
                                imovel: {
                                    ...state.addProperty.imovel, 
                                    aquisicao: e.target.value
                                }
                            }
                        })}
            >
              <option>- TIPO DE AQUISIÇÃO -</option>
              <option>Aluguel</option>
              <option>Venda</option>
            </select>
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <input
              type="number"
              className="h-10 text-center"
              placeholder="QUANTIDADE DE SALAS"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty, 
                            imovel: {
                                ...state.addProperty.imovel, 
                                sala: Number(e.target.value),
                            }
                        }
                    })}
            />
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <input
              type="number"
              className="h-10 text-center"
              placeholder="QUANTIDADE DE COZINHAS"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty, 
                            imovel: {
                                ...state.addProperty.imovel, 
                                cozinha: Number(e.target.value),
                            }
                        }
                    })}
            />
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <input
              type="number"
              className="h-10 text-center"
              placeholder="QUANTIDADE DE QUARTOS"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty, 
                            imovel: {
                                ...state.addProperty.imovel, 
                                quarto: Number(e.target.value),
                            }
                        }
                    })}
            />
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <select 
                className="h-10 text-center"
                onChange={
                    (e) => dispatch({
                            type: 'ADDPROPERTY', 
                            payload: {
                                ...state.addProperty, 
                                imovel: {
                                    ...state.addProperty.imovel, 
                                    quintal: e.target.value === 'Sim' ? true : false,
                                }
                            }
                        })}
            >
              <option>- TEM QUINTAL -</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <input
              type="number"
              className="h-10 text-center"
              placeholder="PREÇO"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty, 
                            imovel: {
                                ...state.addProperty.imovel, 
                                preco: Number(e.target.value)
                            }
                        }
                    })}
            />
          </div>
          <div className="flex flex-col px-5 gap-3 pt-5 text-zinc-700">
            <input
              type="text"
              className="h-10 text-center"
              placeholder="LINK DA IMAGEM"
              onChange={
                (e) => dispatch({
                        type: 'ADDPROPERTY', 
                        payload: {
                            ...state.addProperty,
                            imagem: e.target.value,
                        }
                    })}
            />
          </div>
        </div>
        <SelectLocalInfo>PUBLICAR</SelectLocalInfo>
      </div>
    </>
  );
}
