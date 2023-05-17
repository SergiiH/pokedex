import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import usePokedex from "./usePokedex";
import PokemonItem from "./components/PokemonItem.component";
import PokemonInfo from "./components/PokemonInfo.component";

const Pokedex = () => {
  const {
    list,
    chosenPokemon,
    setChosenPokemon,
    handleClick,
    types,
    selectType,
    isLoading,
    setSelectType,
  } = usePokedex();

  if (isLoading) return <div>Loading...</div>;
  return (
    <Box>
      <Box marginBottom={3}>
        <Typography variant="h2" textAlign="center">
          Pokedex
        </Typography>

        <Select
          value={selectType}
          sx={{
            display: "flex",
            width: 280,
            margin: "0 auto",
            textTransform: "capitalize",
          }}
          onChange={(e) => setSelectType(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {types.map((item) => (
            <MenuItem value={item.name} key={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box display="flex" justifyContent="space-around">
        <Box sx={{ width: "100%" }}>
          <Grid container justifyContent="space-between">
            {list?.map((item) => (
              <PokemonItem
                item={item}
                setChosenPokemon={setChosenPokemon}
                key={item.name}
                selectType={selectType}
              />
            ))}
          </Grid>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ margin: "0 auto", display: "flex" }}
          >
            Load More
          </Button>
        </Box>
        <Box sx={{ minWidth: 180 }}>
          <PokemonInfo pokemon={chosenPokemon} />
        </Box>
      </Box>
    </Box>
  );
};

export default Pokedex;
