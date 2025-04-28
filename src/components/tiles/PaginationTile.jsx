import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Using react-icons

const PaginationTile = ({ totalItems, onAction }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / 10);

  const nextPage = () => {
    if (currentPage < totalPages) {
      const next = currentPage + 1;
      setCurrentPage(next);
      onAction && onAction(next);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const prev = currentPage - 1;
      setCurrentPage(prev);
      onAction && onAction(prev);
    }
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalItems]);

  return (
    <div className="w-full flex justify-center items-center mt-5 gap-2">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="cursor-pointer text-sm p-2 rounded-l-full border bg-secondary-color hover:bg-tertiary hover:border-secondary disabled:opacity-50"
      >
        <FaChevronLeft size={16} />
      </button>

      <span className="text-sm text-primary-text-color font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="cursor-pointer text-sm p-2 fill-light-primary-color rounded-r-full border hover:bg-tertiary hover:border-secondary disabled:opacity-50"
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
};

export default PaginationTile;