import React from "react";
import BabyCare from "../assets/images/baby-care.png";
import AllCategoriesImg from "./AllCategoriesImg";
import HB from "../assets/images/allCategoriesImg/Herbal-Preparations.jpg";
import PC from "../assets/images/allCategoriesImg/Personal-Care.jpg";
import ED from "../assets/images/allCategoriesImg/eneryD.jpg";

const AllCategories = () => {
  return (
    <>
      <div className="w-full justify-center md:flex">
        <div className="md:w-[47%] md:pl-32 md:py-32 pt-28 py-12 px-5">
          <div className="relative bg-cover bg-center w-full md:h-64 h-44 rounded-lg bg-[url(/src/assets/images/allCategoriesImg/skinCare.jpg)]">
            <div className="absolute bg-gray-200 w-full md:h-64 h-44 rounded-lg top-3 left-3 z-[-2]"></div>
          </div>
        </div>
        <div className="md:w-[47%] md:pr-32 md:pl-7 md:py-32 pt-10 py-12 px-5">
          <div className="relative bg-cover bg-center w-full md:h-64 h-44 rounded-lg bg-[url(/src/assets/images/allCategoriesImg/OTCImg.jpg)]">
            <div className="absolute bg-gray-200 w-full md:h-64 h-44 rounded-lg top-3 left-3 z-[-2]"></div>
          </div>
        </div>
      </div>
      <div className="text-center mx-2 mb-16 bg-[#FBFCFC]">
        <h1 className="text-4xl text-[#3470a1] font-semibold">
          All Categories
        </h1>
        <div className="border-t-2 border-[#3470a1] w-[8%] ml-[46%] mt-7"></div>
      </div>
      <div className="w-[70%] ml-[15%] md:flex md:flex-row flex-col ">
        <AllCategoriesImg CategoryImg={BabyCare} CategoryText={"Baby Care"} CategoryBtn={"Baby Care"} />
        <AllCategoriesImg CategoryImg={HB} CategoryText={"Herbal Preparations"} CategoryBtn={"Herbal Preparations"} />
        <AllCategoriesImg CategoryImg={PC} CategoryText={"Personal Care"} CategoryBtn={"Personal Care"} />
        <AllCategoriesImg CategoryImg={ED} CategoryText={"Energy Drinks"} CategoryBtn={"Energy Drinks"} />
      </div>
    </>
  );
};

export default AllCategories;
