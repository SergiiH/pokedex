import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import usePokemonItem from "./usePokemonItem";

const PokemonItem = ({ item, setChosenPokemon, selectType }) => {
  const { pokemon, isLoading } = usePokemonItem(item);
  if (isLoading) return <div></div>;
  console.log(selectType);
  const filter = pokemon?.types.find((item) => item.type.name === selectType);

  return filter || selectType === "All" ? (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card onClick={() => setChosenPokemon(pokemon)} sx={{ minWidth: 100 }}>
        <CardMedia
          sx={{ height: 150 }}
          image={pokemon?.sprites.front_default}
          title={pokemon?.name}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            align="center"
          >
            {pokemon?.name}
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            {pokemon?.types.map((item, index) => (
              <Chip label={item.type.name} variant="outlined" key={index} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  ) : null;
};

export default PokemonItem;
