const usePokemonInfo = (pokemon) => {
  const infoList = !pokemon
    ? []
    : [
        {
          name: "Type",
          value: pokemon?.types[0].type.name,
        },
        ...pokemon?.stats.map((item) => {
          return {
            name: item.stat.name,
            value: item.base_stat,
          };
        }),
        {
          name: "Weight",
          value: pokemon?.weight,
        },
        {
          name: "Total moves",
          value: pokemon?.moves.length,
        },
      ];
  return { infoList };
};

export default usePokemonInfo;
