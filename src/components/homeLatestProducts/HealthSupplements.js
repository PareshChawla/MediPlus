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
    <ProductCard productImg={hs1} productTitle={"Genetic Nutrition Bio Whey Powder Chocolate 1Kg"} />
    <ProductCard productImg={hs2} productTitle={"Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg"} />
    <ProductCard productImg={hs3} productTitle={"Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s"} />
    <ProductCard productImg={hs4} productTitle={"Genetic Nutrition Cap CLA (1×60) 1s"} />
    <ProductCard productImg={hs5} productTitle={"Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s"} />
    <ProductCard productImg={hs6} productTitle={"Genetic Nutrition Cap Mega Probiotics (1×30) 1s"} />
    </div>
  )
}

export default HealthSupplements