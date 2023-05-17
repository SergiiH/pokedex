import { useEffect, useState } from "react";
import { getPokemonList, getPokemonTypes } from "../api";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState({
    list: [],
    nextLink: undefined,
  });

  const handleClick = async () => {
    const result = await getPokemonList(pokemons.nextLink);
    const newArr = JSON.parse(JSON.stringify(pokemons.list));
    newArr.push(...result?.results);
    setPokemons({ ...pokemons, nextLink: result.next, list: newArr });
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectType, setSelectType] = useState("All");

  useEffect(() => {
    (async () => {
      const { results } = await getPokemonTypes();
      setTypes(results);
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [chosenPokemon, setChosenPokemon] = useState();

  return {
    list: pokemons.list,
    chosenPokemon,
    setChosenPokemon,
    handleClick,
    types,
    selectType,
    isLoading,
    setSelectType,
  };
};

export default usePokedex;
