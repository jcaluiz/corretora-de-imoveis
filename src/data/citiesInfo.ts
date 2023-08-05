import getDistrictInfo from "@/utils/getDistrictInfo";

const requestsCities = async (setCities: any, dispatch: any) => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
    const data = await response.json();
    const dataFilters = data.filter((item: any) => item.municipio.microrregiao.mesorregiao.UF.sigla === 'RJ');
    const formatCities = getDistrictInfo(dataFilters);
    setCities(dataFilters);
    dispatch({ type: "CITIES", payload: formatCities });
};

export default requestsCities;
