import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getMoves,
  getPokemons,
  getSpecies,
  getTypes,
} from "../redux/apiCalls";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const moves = useSelector((state: RootState) => state.moves);
  const species = useSelector((state: RootState) => state.species);
  const types = useSelector((state: RootState) => state.types);
  const items = useSelector((state: RootState) => state.items);
  useEffect(() => {
    dispatch<any>(getPokemons());
    dispatch<any>(getMoves());
    dispatch<any>(getSpecies());
    dispatch<any>(getTypes());
    dispatch<any>(getItems());
  }, [dispatch]);
  return <div></div>;
};
