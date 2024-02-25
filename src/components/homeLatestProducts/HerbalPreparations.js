import React from 'react'
import ProductCard from './ProductCard'
import hp1 from "../../assets/images/herbalPreparationsImg/hp1.jpg";
import hp2 from "../../assets/images/herbalPreparationsImg/hp2.jpg";
import hp3 from "../../assets/images/herbalPreparationsImg/hp3.jpg";
import hp4 from "../../assets/images/herbalPreparationsImg/hp4.jpg";
import hp5 from "../../assets/images/herbalPreparationsImg/hp5.jpg";
import hp6 from "../../assets/images/herbalPreparationsImg/hp6.jpg";

const HerbalPreparations = () => {
  return (
    <div className='bg-white p-10 mx-16 flex flex-col lg:flex-row gap-4'>
    <ProductCard productImg={hp1} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hp2} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hp3} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hp4} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hp5} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hp6} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    </div>
  )
}

export default HerbalPreparations