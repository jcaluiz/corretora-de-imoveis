const getDistrictInfo = (cities: any[]) => cities.map((item: any) => ({
    id: item.id,
    municipio: item.municipio.nome,
    distrito: item.nome,
    regiao: item.municipio.microrregiao.mesorregiao.nome,
    estado: 'RJ',
}));

export default getDistrictInfo;
