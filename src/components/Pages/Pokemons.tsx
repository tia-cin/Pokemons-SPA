import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/getInfo";
import { getDetailAction, searchPokemons } from "../../redux/actions/actions";
import { Footer } from "../Footer";

export const Pokemons: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const detail = useSelector((state: RootState) => state.detail);

  useEffect(() => {
    dispatch<any>(getPokemons());
    dispatch<any>(searchPokemons("pik"));
  }, [dispatch]);

  console.log("pokemons", pokemons);
  return (
    <div>
      Home
      <Footer />
    </div>
  );
};
