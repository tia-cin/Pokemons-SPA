import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getMoves,
  getPokemons,
  getSpecies,
  getTypes,
} from "../redux/actions/getInfo";
import { getDetailAction, searchPokemons } from "../redux/actions/actions";

export const Home: React.FC = () => {
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

  console.log(detail);
  return <div></div>;
};
