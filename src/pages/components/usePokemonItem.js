import { useEffect, useState } from "react";
import { getPokemonById } from "../../api";

const usePokemonItem = (item) => {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const results = await getPokemonById(item.url);
      setPokemon(results);
      setIsLoading(false);
    })();
  }, [item]);

  return { pokemon, isLoading };
};

export default usePokemonItem;
