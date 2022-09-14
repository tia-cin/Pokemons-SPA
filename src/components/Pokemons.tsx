import "./styles/Pokemons.css";
import title from "../assets/pokemon-title.png";
import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/getInfo";
import { SearchBar } from "./SearchBar";
import ReactPaginate from "react-paginate";
import { Card } from "./Card";
import loader from "../assets/pikachu-loader.gif";
import { loadingAction } from "../redux/actions/actions";
import { off } from "process";

interface PokemonsProps {
  firstLetterUpperCase: (word: string) => string;
  colors: { [key: string]: any };
}

export const Pokemons: React.FC<PokemonsProps> = ({
  firstLetterUpperCase,
  colors,
}) => {
  const { pokemons } = useSelector((state: RootState) => state);
  const { loading } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  // pagination
  const [page, setPage] = useState(0);
  const prevPage = (): void => {
    if (page >= 0) {
      setPage(page - 20);
      dispatch<any>(getPokemons(page));
    }
  };
  const nextPage = (): void => {
    setPage(page + 20);
    dispatch<any>(getPokemons(page));
  };

  useEffect(() => {
    dispatch<any>(getPokemons(page));
  }, [dispatch, page]);

  console.log("pokemons", pokemons, "loader", loading);
  return (
    <div className="page-continer" id="pokemons">
      <div>
        <img
          src={title}
          id="pokemon-gotta-catch-them-all"
          alt="pokemon-gotta-catch-them-all"
        />
      </div>
      <div>
        <SearchBar />
      </div>
      {loading ? (
        <div>
          <h4>Loading...</h4>
          <img src={loader} alt="pikachu-loader" />
        </div>
      ) : (
        <div>
          <div className="grid">
            {pokemons.map((p, i) => (
              <Card
                colors={colors}
                key={i}
                pokemon={p}
                firstLetterUpperCase={firstLetterUpperCase}
              />
            ))}
          </div>
          <div>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};
