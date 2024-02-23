import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onNext }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex space-x-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => onNext(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span className="bg-white text-gray-800 font-bold py-2 px-4 rounded">
          {currentPage}
        </span>
        <Link to="/">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => onNext(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;