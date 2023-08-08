import { StateType } from "./types";

export const initialState: StateType = {
  name: "",
  cities: [],
  municipio: "",
  distrito: "",
  addProperty: {
    id: 0,
    local: {
      municipio: "",
      distrito: "",
      bairro: "",
    },
    imovel: {
      titulo: "",
      aquisicao: "",
      tipo: "",
      sala: 0,
      cozinha: 0,
      quarto: 0,
      quintal: true,
      preco: 0,
      imagens: [],
    },
    facilidades: [],
  },
};
