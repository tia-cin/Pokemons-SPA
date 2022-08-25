import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/getInfo";
import { SearchBar } from "../SearchBar";
import { Card } from "../Card";
import { Pagination } from "../Pagination";

export const Pokemons: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getPokemons());
  }, [dispatch]);

  console.log("pokemons", pokemons);
  return (
    <div>
      Pokemons
      <SearchBar />
      <div>{Array.isArray(pokemons) && <Pagination array={pokemons} />}</div>
    </div>
  );
};
