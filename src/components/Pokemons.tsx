import "./styles/Pokemons.css";
import title from "../assets/pokemon-title.png";
import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/getInfo";
import { SearchBar } from "./SearchBar";
import ReactPaginate from "react-paginate";
import { Card } from "./Card";

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

  useEffect(() => {
    dispatch<any>(getPokemons());
  }, [dispatch]);

  console.log("pokemons", pokemons);
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
      <div>
        <div className="grid">
          {displayItems.map((p, i) => (
            <Card key={i} pokemon={p} />
          ))}
        </div>
        <ReactPaginate
          activeClassName="pagination-active"
          disabledClassName="pagination-disable"
          nextClassName="pages pagination-buttons"
          pageClassName="pages"
          previousClassName="pages pagination-buttons"
          containerClassName="pagination"
          breakClassName="pages break"
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={totalPages}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};
