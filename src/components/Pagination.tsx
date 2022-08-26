import React, { useState } from "react";

import ReactPaginate from "react-paginate";

interface PaginationProps {
  array: any;
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
      <section>{displayItems}</section>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPages}
        onPageChange={changePage}
      />
    </div>
  );
};
