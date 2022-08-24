import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getMoves,
  getPokemons,
  getSpecies,
  getTypes,
} from "../../redux/actions/getInfo";
import { getDetailAction, searchPokemons } from "../../redux/actions/actions";
import { Footer } from "../Footer";

export const Pokemons: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const moves = useSelector((state: RootState) => state.moves);
  const species = useSelector((state: RootState) => state.species);
  const types = useSelector((state: RootState) => state.types);
  const items = useSelector((state: RootState) => state.items);
  const detail = useSelector((state: RootState) => state.detail);

  useEffect(() => {
    dispatch<any>(getPokemons());
    dispatch<any>(getMoves());
    dispatch<any>(getSpecies());
    dispatch<any>(getTypes());
    dispatch<any>(getItems());
    dispatch<any>(searchPokemons("pik"));
    dispatch<any>(getDetailAction(3));
  }, [dispatch]);

  console.log("pokemons", pokemons);
  console.log("moves", moves);
  console.log("species", species);
  console.log("types", types);
  console.log("items", items);
  console.log("detail", detail);
  return (
    <div>
      Home
      <Footer />
    </div>
  );
};
