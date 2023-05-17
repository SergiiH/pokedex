const base = "https://pokeapi.co/api/v2/";

export const getPokemonList = async (
  link = `${base}pokemon?limit=12&offset=0`
) => {
  const res = await fetch(link);
  return await res.json();
};

export const getPokemonById = async (link = `${base}pokemon/1`) => {
  const res = await fetch(link);
  return await res.json();
};

export const getPokemonTypes = async () => {
  const res = await fetch(`${base}type`);
  return await res.json();
};
