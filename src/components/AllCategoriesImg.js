import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllCategoriesImg = ({ CategoryImg, CategoryText, CategoryBtn, to }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="bg-white w-72 h-52 flex justify-center items-center border rounded-sm overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={to}>
        <img
          className="md:w-[270px] w-[270px] h-48 transition-transform ease-in-out duration-500 transform hover:scale-125 hover:brightness-50 object-cover"
          src={CategoryImg}
          alt="category-img"
        />
        </Link>
        <p
          className={`text-white absolute text-sm font-bold ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          {CategoryText}
        </p>
      </div>
      <div className="flex justify-center md:mr-0 items-center pb-10 md:pb-20">
        <button className="bg-[#6cb250] hover:bg-[#3470a1] rounded-sm text-white py-1.5 px-5 ml-[20] mt-5">
          {CategoryBtn}
        </button>
      </div>
    </div>
  );
};

export default AllCategoriesImg;
