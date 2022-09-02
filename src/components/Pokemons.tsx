import "./styles/Pokemons.css";
import title from "../assets/pokemon-title.png";
import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/getInfo";
import { SearchBar } from "./SearchBar";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export const Pokemons: React.FC = () => {
  const { pokemons } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  // pagination
  const [page, setPage] = useState(0);
  const itemsPerPage = 9;
  const numberOfItems = page * itemsPerPage;
  const displayItems = pokemons.slice(
    numberOfItems,
    numberOfItems + itemsPerPage
  );
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);
  const changePage = (e: any): void => {
    setPage(e.selected);
  };

  // first letter uppercase
  const firstLetterUpperCase = (word: string) =>
    word.charAt(0).toLocaleUpperCase() + word.slice(1);

  useEffect(() => {
    dispatch<any>(getPokemons());
  }, [dispatch]);

  console.log("pokemons", pokemons);
  return (
    <div className="page-continer" id="pokemons">
      <div className="image-container">
        <img
          src={title}
          id="pokemon-gotta-catch-them-all"
          alt="pokemon-gotta-catch-them-all"
        />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <div className="grid">
          {displayItems.map((e) => (
            <div key={e.id}>
              <div>
                <div>
                  <img src={e.sprites.front_default} alt="pokemon-back" />
                </div>
              </div>
              <div>
                <h3>{e.name.toLocaleUpperCase()}</h3>
                <div>
                  {e.types.map((t, i) => (
                    <p key={i}>{firstLetterUpperCase(t.type.name)}</p>
                  ))}
                </div>
              </div>
              <div>
                <Link to={`/pokemon/${e.id}`}>
                  <button>Catch It!</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          activeClassName="pagination-active"
          nextClassName="pagination-buttons next"
          pageClassName="pagination-page"
          previousClassName="pagination-buttons prev"
          containerClassName="pagination"
          breakClassName="pagination-breack"
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={totalPages}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};
