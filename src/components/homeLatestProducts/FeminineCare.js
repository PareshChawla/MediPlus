import React from 'react'
import ProductCard from './ProductCard'
import fc1 from "../../assets/images/feminineCareImg/fc1.jpg";
import fc2 from "../../assets/images/feminineCareImg/fc2.jpg";
import fc3 from "../../assets/images/feminineCareImg/fc3.jpg";
import fc4 from "../../assets/images/feminineCareImg/fc4.jpg";
import fc5 from "../../assets/images/feminineCareImg/fc5.jpg";
import fc6 from "../../assets/images/feminineCareImg/fc6.jpg";

const FeminineCare = () => {
  return (
    <div className='bg-white p-10 mx-16 flex flex-col lg:flex-row gap-4'>
    <ProductCard productImg={fc1} productTitle={"Carmesi Disposable Period Panties M-L (1×4) 1s"} />
    <ProductCard productImg={fc2} productTitle={"Carmesi Facial Razor For Women (1×3) 1s"} />
    <ProductCard productImg={fc3} productTitle={"Carmesi Panty Liners (1×60) 1s"} />
    <ProductCard productImg={fc4} productTitle={"Carmesi Sensitive Sanitary Pads Rash Free (1×10) 1s"} />
    <ProductCard productImg={fc5} productTitle={"Good Vibes Brightening Face Serum Vitamin C 30ml"} />
    <ProductCard productImg={fc6} productTitle={"Hi Life Intimate Hygiene Spray (480 Spray) 60ml"} />
    </div>
  )
}

export default FeminineCare