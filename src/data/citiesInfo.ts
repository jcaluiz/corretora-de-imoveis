const requestsCities = async (setCities: any) => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
    const data = await response.json();
    const dataFilters = data.filter((item: any) => item.municipio.microrregiao.mesorregiao.UF.sigla === 'RJ');
    setCities(dataFilters);
};

export default requestsCities;
