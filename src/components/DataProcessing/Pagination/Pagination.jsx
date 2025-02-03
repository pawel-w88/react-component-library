import React from "react";

import "./Pagination.scss";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="Pagination ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      <span>
        {currentPage} from {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
};
