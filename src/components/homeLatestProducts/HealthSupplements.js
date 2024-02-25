import React from 'react'
import ProductCard from './ProductCard'
import hs1 from "../../assets/images/healthSupplementImg/hs1.jpg";
import hs2 from "../../assets/images/healthSupplementImg/hs2.jpg";
import hs3 from "../../assets/images/healthSupplementImg/hs3.jpg";
import hs4 from "../../assets/images/healthSupplementImg/hs4.jpg";
import hs5 from "../../assets/images/healthSupplementImg/hs5.jpg";
import hs6 from "../../assets/images/healthSupplementImg/hs6.jpg";


const HealthSupplements = () => {
  return (
    <div className='bg-white p-10 mx-16 flex flex-col lg:flex-row gap-4'>
    <ProductCard productImg={hs1} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hs2} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hs3} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hs4} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hs5} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    <ProductCard productImg={hs6} productTitle={"Armr Anti Hangover Shot Apple 60ml"} />
    </div>
  )
}

export default HealthSupplements