import React, { useState } from "react";
import EnergyDrinks from "./homeLatestProducts/EnergyDrinks";
import HerbalPreparations from "./homeLatestProducts/HerbalPreparations";
import HealthSupplements from "./homeLatestProducts/HealthSupplements";
import FeminineCare from "./homeLatestProducts/FeminineCare";
import PersonalCare from "./homeLatestProducts/PersonalCare";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("energyDrinks");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryClassName = (category) => {
    return `cursor-pointer tracking-wider ${
      selectedCategory === category
        ? "bg-white text-[#3470a1]"
        : "text-[#6cb250]"
    } font-bold underline text-sm`;
  };

  return (
    <div className="text-center m-2 mb-7 bg-[#FBFCFC]">
      <h1 className="text-4xl text-[#3470a1] font-bold">
        Our Latest Products
      </h1>
      <div className="border-t-2 border-[#3470a1] w-[8%] ml-[46%] mt-7"></div>
      <div className="uppercase flex flex-col lg:flex-row text-[#6cb250] font-bold underline pt-5 gap-5 text-sm justify-center">
        <h1
          className={`p-5 ${getCategoryClassName("energyDrinks")}`}
          onClick={() => handleCategoryClick("energyDrinks")}
        >
          Energy drinks
        </h1>
        <div className="block md:hidden">{selectedCategory === "energyDrinks" && <EnergyDrinks />}</div>
        <h1
          className={`p-5 ${getCategoryClassName("herbalPreparations")}`}
          onClick={() => handleCategoryClick("herbalPreparations")}
        >
          Herbal preparations
        </h1>
        <div className="block md:hidden">{selectedCategory === "herbalPreparations" && <HerbalPreparations />}</div>
        <h1
          className={`p-5 ${getCategoryClassName("healthSupplements")}`}
          onClick={() => handleCategoryClick("healthSupplements")}
        >
          Health supplements
        </h1>
        <div className="block md:hidden">{selectedCategory === "healthSupplements" && <HealthSupplements />}</div>
        <h1
          className={`p-5 ${getCategoryClassName("feminineCare")}`}
          onClick={() => handleCategoryClick("feminineCare")}
        >
          Feminine care
        </h1>
        <div className="block md:hidden">{selectedCategory === "feminineCare" && <FeminineCare />}</div>
        <h1
          className={`p-5 ${getCategoryClassName("personalCare")}`}
          onClick={() => handleCategoryClick("personalCare")}
        >
          Personal care
        </h1>
        <div className="block md:hidden">{selectedCategory === "personalCare" && <PersonalCare />}</div>
      </div>

      <div className="hidden md:block">
      {selectedCategory === "energyDrinks" && <EnergyDrinks />}
      {selectedCategory === "herbalPreparations" && <HerbalPreparations />}
      {selectedCategory === "healthSupplements" && <HealthSupplements />}
      {selectedCategory === "feminineCare" && <FeminineCare />}
      {selectedCategory === "personalCare" && <PersonalCare />}
      </div>

      <Link to="/products">
        <button className="px-9 py-3.5 m-3 font-bold rounded-lg bg-white hover:bg-[#6cb250] hover:border-[#6cb250] border-2 border-[#3470a1] text-[#3470a1] hover:text-white">
          ALL PRODUCTS
        </button>
      </Link>
    </div>
  );
};

export default LatestProducts;
