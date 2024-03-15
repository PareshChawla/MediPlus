import React from 'react';
// import { Link } from "react-router-dom";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
  console.log(currentPage)
};
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="flex justify-between w-64">
        <button
          className="bg-[#6cb250] hover:bg-blue-700 text-white font-bold py-1.5 px-5 mt-2 md:mt-0 md:absolute left-48"
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`text-lg font-semibold ${page === currentPage ? "active " : ""}mt-2 md:mt-0 hidden md:inline-block`}>
              {page}
            </button>
          );
        })}
        <button
          className="bg-[#6cb250] hover:bg-blue-700 text-white font-bold py-1.5 px-5 rounded mt-2 md:mt-0 md:absolute right-48"
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage >= pages.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
