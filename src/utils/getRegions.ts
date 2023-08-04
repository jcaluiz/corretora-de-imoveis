const getRegions = (cities: any) =>
  cities
    .map((item: any) => item.municipio.microrregiao.mesorregiao.nome)
    .reduce((acc: string[], curr: string) => {
      if (!acc.find((item: string) => item === curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

export default getRegions;
