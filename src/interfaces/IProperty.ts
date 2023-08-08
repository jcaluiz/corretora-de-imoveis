export default interface IProperty {
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
        imagens: {images: string[]},
    },
    facilidades: string[],
};
