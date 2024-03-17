import React from "react";
import {
  PiCaretDoubleLeftThin,
  PiCaretDoubleRightThin,
  PiCaretLeftLight,
  PiCaretRightLight,
} from "react-icons/pi";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const displayedPageNumbers =
    totalItems > 3 ? pageNumbers.slice(0, 3) : pageNumbers;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-row items-center gap-1">
      <div className="flex items-center justify-center rounded-full bg-shades-white w-8 h-8">
        <PiCaretDoubleLeftThin />
      </div>
      <div className="flex items-center justify-center rounded-full bg-shades-white w-8 h-8"  onClick={() => onPageChange(currentPage - 1)}>
        <PiCaretLeftLight />
      </div>
      {displayedPageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          className={`flex items-center justify-center rounded-full  w-8 h-8 ${
            pageNumber === currentPage
              ? "bg-shades-black text-shades-white"
              : "bg-shades-white text-shades-black"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </div>
      ))}

      {totalPages > 3 ? (
        <>
          <div className="flex items-center justify-center rounded-lg bg-shades-white w-8 h-8">
            ...
          </div>
          <div className={`flex items-center justify-center rounded-full  w-8 h-8 ${
            pageNumbers === currentPage
              ? "bg-shades-black text-shades-white"
              : "bg-shades-white text-shades-black"
          }`}>
            {pageNumbers}
          </div>
        </>
      ) : null}
      <div className="flex items-center justify-center rounded-full bg-shades-white w-8 h-8" onClick={() => onPageChange(currentPage + 1)}>
        <PiCaretRightLight />
      </div>
      <div className="flex items-center justify-center rounded-full bg-shades-white w-8 h-8">
        <PiCaretDoubleRightThin />
      </div>
    </div>
  );
};

export default Pagination;
