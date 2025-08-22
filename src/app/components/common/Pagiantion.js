"use client";
import Image from "next/image";

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  className = "",
}) => {
  const handlePageChange = (page) => {
    if (onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 3) {
        // Show first 3 pages + ellipsis + last page
        for (let i = 1; i <= 3; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page + ellipsis + last 3 pages
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
      } else {
        // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 text-sm font-poppins ${className}`}
    >
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 items-center justify-center gap-2 px-3 py-2 rounded border border-black/20 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <Image
          src="/svg/left-arrow.svg"
          alt="Previous"
          width={16}
          height={16}
          className=" w-4 h-4"
        />
        <span className="tracking-[-0.5px]">Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === "number" ? handlePageChange(page) : null
            }
            disabled={page === "..."}
            className={`
              w-8 h-8 rounded flex items-center justify-center transition-all duration-200
              ${
                page === currentPage
                  ? "bg-darkgray-150 text-white border-0"
                  : page === "..."
                    ? "text-gray-400 cursor-default"
                    : "bg-white border border-black/20 hover:bg-gray-50 text-black"
              }
            `}
          >
            <span className="tracking-[-0.5px] text-sm">{page}</span>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 items-center justify-center gap-2 px-3 py-2 rounded border border-black/20 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <span className="tracking-[-0.5px]">Next</span>
        <Image
          src="/svg/right-arrow.svg"
          alt="Next"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default Pagination;
