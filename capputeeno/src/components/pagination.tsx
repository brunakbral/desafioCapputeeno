import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-2 mt-4">
      <button
        className="px-3 py-1 border rounded-lg disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border rounded-lg ${currentPage === page ? "border-orange-500 text-orange-500" : "text-gray-500"}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 border rounded-lg disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
