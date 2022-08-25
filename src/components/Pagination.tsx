import React, { useState } from "react";
import { Pokemon, Move, Type, Item, Species } from "../redux/types";

import ReactPaginate from "react-paginate";
import { PokemonCard } from "./PokemonCard";
import { Container } from "./Container";

interface PaginationProps {
  array: Pokemon[] | Move[] | Type[] | Item[] | Species[];
}

export const Pagination: React.FC<PaginationProps> = ({ array }) => {
  const [page, setPage] = useState(0);

  const itemsPerPage = 9;
  const numberOfItems = page * itemsPerPage;

  const displayItems = array.slice(numberOfItems, numberOfItems + itemsPerPage);

  const totalPages = Math.ceil(array.length / itemsPerPage);

  const changePage = (e: any) => {
    setPage(e.selected);
  };

  return (
    <div>
      <Container content={displayItems} />
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPages}
        onPageChange={changePage}
      />
    </div>
  );
};
