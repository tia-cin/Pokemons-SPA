import React from "react";
import { Item, Move, Pokemon, Species, Type } from "../redux/types";
import { PokemonCard } from "./PokemonCard";

interface ContainerProps {
  content: any;
}
export const Container: React.FC<ContainerProps> = ({ content }) => {
  console.log(content);
  const pokemons: Pokemon[] = content;
  const items: Item[] = content;
  const moves: Move[] = content;
  const species: Species[] = content;
  const types: Type[] = content;

  console.log("pokemons", pokemons);
  console.log("items", items);
  console.log("moves", moves);
  console.log("species", species);
  console.log("types", types);

  return (
    <div>
      {pokemons.map((p, i) => (
        <PokemonCard key={i} data={p} />
      ))}
    </div>
  );
};
