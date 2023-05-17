import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import usePokemonInfo from "./usePokemonInfo";

const PokemonInfo = ({ pokemon }) => {
  const { infoList } = usePokemonInfo(pokemon);

  if (!pokemon?.name) return <div>choose a pokemon</div>;
  return (
    <Card sx={{ position: "fixed" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pokemon.sprites.front_default}
        title={pokemon.name}
      />
      <CardContent sx={{ padding: "8px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ textTransform: "capitalize" }}
        >
          {pokemon.name}
        </Typography>
        <List sx={{}}>
          {infoList.map((item, i) => (
            <ListItem
              key={i}
              sx={{
                borderBottom: "1px solid #000",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{ textTransform: "capitalize" }}
              />
              <ListItemText primary={item.value} sx={{ textAlign: "right" }} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PokemonInfo;
