import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/apiCalls";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch<any>(getPokemons());
  }, [dispatch]);
  return <div></div>;
};
