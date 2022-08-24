import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/getInfo";
import { Footer } from "../Footer";
import { SearchBar } from "../SearchBar";
import { Card } from "../Card";

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
      <div>
        {Array.isArray(pokemons) &&
          pokemons.map((p) => <Card key={p.id} data={p} />)}
      </div>
      <Footer />
    </div>
  );
};
