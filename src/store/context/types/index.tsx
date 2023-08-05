export type StateType = {
    name: string;
    cities: any[];
    municipio: string;
    distrito: string;
    addProperty: {
        id: number,
        local: {
            municipio: string,
            distrito: string,
            bairro: string,
        },
        imovel: {
            titulo: string,
            aquisicao: string,
            tipo: string,
            sala: number,
            cozinha: number,
            quarto: number,
            quintal: boolean,
            preco: number
        },
        facilidades: string[],
        imagem: string,
    },
};

export type ActionType = {
    type: "NAME", payload: string,
} | {
    type: "CITIES", payload: any[],
} | {
    type: "MUNICIPIO", payload: string,
} | {
    type: "DISTRITO", payload: string,
}  | {
    type: "ADDPROPERTY", payload: any,
};
