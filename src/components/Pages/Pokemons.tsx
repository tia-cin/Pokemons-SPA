import React, { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions/getInfo";
import { SearchBar } from "../SearchBar";

import ReactPaginate from "react-paginate";

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
    <div>
      Pokemons
      <SearchBar />
      <div>
        <section>
          {displayItems.map((e) => (
            <div key={e.id}>
              <h3>{e.name}</h3>
            </div>
          ))}
        </section>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={totalPages}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};
