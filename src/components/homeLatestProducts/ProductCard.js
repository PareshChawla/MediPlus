import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productImg, productTitle }) => {
  return (
    <div className="flex flex-col lg:w-[18%] justify-center items-center overflow-hidden">
      <div className="w-64 object-fit relative overflow-hidden transform transition-transform duration-500 hover:scale-110">
        <img
          className="object-contain w-full h-full flex-grow"
          src={productImg}
          alt="latest-product"
        />
      </div>
      <p className="mt-2 text-[#3470a1] hover:text-[#6cb250] font-bold flex-grow">
        {productTitle}
      </p>
      <Link to="/upload">
        <button className="bg-[#6cb250] hover:bg-[#3470a1] text-white py-1.5 px-5 mt-4">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
