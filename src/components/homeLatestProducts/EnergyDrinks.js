import React from 'react'
import ProductCard from './ProductCard'
import ed1 from "../../assets/images/energyDrinkImg/1ed.jpg";
import ed2 from "../../assets/images/energyDrinkImg/2ed.jpg";
import ed3 from "../../assets/images/energyDrinkImg/3ed.jpg";
import ed4 from "../../assets/images/energyDrinkImg/4ed.jpg";
import ed5 from "../../assets/images/energyDrinkImg/5ed.jpg";
import ed6 from "../../assets/images/energyDrinkImg/6ed.jpg";

const EnergyDrinks = () => {
  return (
    <div className='bg-white p-10 mx-16 flex flex-col lg:flex-row gap-4'>
    <ProductCard productImg={ed1} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={ed2} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={ed3} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={ed4} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={ed5} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={ed6} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    </div>
  )
}

export default EnergyDrinks