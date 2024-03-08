import React from "react";
import BabyCare from "../assets/images/baby-care.png";
import AllCategoriesImg from "./AllCategoriesImg";
import HB from "../assets/images/allCategoriesImg/Herbal-Preparations.jpg";
import PC from "../assets/images/allCategoriesImg/Personal-Care.jpg";
import ED from "../assets/images/allCategoriesImg/eneryD.jpg";
import banner from "../assets/images/medi.jpg";
import { Link } from "react-router-dom";

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
        <h1 className="text-4xl text-[#3470a1] font-bold">
          All Categories
        </h1>
        <div className="border-t-2 border-[#3470a1] w-[8%] ml-[46%] mt-7"></div>
      </div>
      <div className="w-[70%] ml-[20%] md:ml-[15%] md:flex md:flex-row flex-col ">
        <AllCategoriesImg CategoryImg={BabyCare} CategoryText={"Baby Care"} CategoryBtn={"Baby Care"} />
        <AllCategoriesImg CategoryImg={HB} CategoryText={"Herbal Preparations"} CategoryBtn={<Link to="/category/herbal-preparations">Herbal Preparations</Link>} />
        <AllCategoriesImg CategoryImg={PC} CategoryText={"Personal Care"} CategoryBtn={<Link to="/category/personal-care">Personal Care</Link>} />
        <AllCategoriesImg CategoryImg={ED} CategoryText={"Energy Drinks"} CategoryBtn={<Link to="/category/energy-drinks">Energy Drinks</Link>} />
      </div>
      <div className="relative w-full">
        <img className="w-full h-[500px] brightness-75 object-cover" src={banner} alt="Img1" />
        <div className="absolute inset-0 flex flex-col justify-center items-end text-white">
          <div className="text-right px-8">
            <h1 className="text-4xl font-bold mb-4">Get Medicines and Health Products<br />of Reputed Brands</h1>
            <p className="text-lg">Browse our wide range of Ayurveda & Herbal supplements. Buy healthcare products and<br /> health devices at one place.</p>
            <Link to="/products">
              <button className="mt-4 bg-[#6cb250] hover:bg-[#3470a1] text-white py-2 px-6 rounded-lg">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
