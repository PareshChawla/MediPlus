import React from "react";
import { Link } from "react-router-dom";

const HealthCarousel = ({
  img,
  healthtitle,
  healthName,
  healthDetails,
  healthpost,
  to,
}) => {
  return (
    <div className="bg-white shadow-md mb-5 mt-8 px-2 pt-1 lg:m-2 overflow-hidden flex flex-col">
      <Link to="/health">
        <p className="text-gray-600 text-ls mt-5 ml-6 mx-4 hover:text-[#6cb250] mb-2 cursor-pointer">
          {healthtitle}
        </p>
      </Link>
      <h2 className="mt-2 mx-6 mb-4 text-xl text-[#3470a1] cursor-pointer font-bold">
        {healthName}
      </h2>

      <div className="mt-5 overflow-hidden scale-110 cursor-pointer">
        <Link to={to}>
          <img
            className="object-contain w-full h-full"
            src={img}
            alt="healths"
          />
        </Link>
      </div>
      <div className="mt-7 mx-5 flex-grow ">
        <p className="text-gray-600 text-ls">{healthDetails}</p>
      </div>
      <div className="mr-2 flex justify-between items-end">
        <div className="flex items-center ml-5 pt-8 mb-4">
          <Link to="/mediplusPharmacy">
            <p className="hover:text-[#6cb250] text-xs font-mono cursor-pointer">
              {healthpost}
            </p>
          </Link>
          <p className="text-xs">
            <p>&nbsp;&nbsp;/&nbsp;&nbsp;FEBRUARY 9, 2024</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthCarousel;
