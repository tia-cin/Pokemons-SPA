import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/getInfo";
import { Footer } from "../Footer";
import { SearchBar } from "../SearchBar";

export const Pokemons: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch<any>(getPokemons());
  }, [dispatch]);

  console.log("pokemons", pokemons);
  return (
    <div>
      Pokemons
      <SearchBar />
      <Footer />
    </div>
  );
};
