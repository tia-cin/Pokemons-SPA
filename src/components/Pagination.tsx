import React, { useState } from "react";
import { Pokemon } from "../redux/types";

import ReactPaginate from "react-paginate";
import { Card } from "./Card";

interface PaginationProps {
  array: Pokemon[];
}

export const Pagination: React.FC<PaginationProps> = ({ array }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 9;
  const numberOfItems = page * itemsPerPage;
  const displayItems = array
    .slice(numberOfItems, numberOfItems + itemsPerPage)
    .map((i) => <Card data={i} />);

  const totalPages = Math.ceil(array.length / itemsPerPage);

  const changePage = (e: any) => {
    setPage(e.selected);
  };

  console.log(displayItems);

  return (
    <div>
      {displayItems}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPages}
        onPageChange={changePage}
      />
    </div>
  );
};
