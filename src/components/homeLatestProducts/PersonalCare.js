import React from 'react'
import ProductCard from './ProductCard'
import ed1 from "../../assets/images/personalCareImg/pc1.jpg";
import ed2 from "../../assets/images/personalCareImg/pc2.jpg";
import ed3 from "../../assets/images/personalCareImg/pc3.jpg";
import ed4 from "../../assets/images/personalCareImg/pc4.jpg";
import ed5 from "../../assets/images/personalCareImg/pc5.jpg";
import ed6 from "../../assets/images/personalCareImg/pc6.jpg";

const PersonalCare = () => {
  return (
    <div className='bg-white p-10 mx-16 flex flex-col lg:flex-row gap-4'>
    <ProductCard productImg={ed1} productTitle={"Faces Canada Lip Balm Orange Mint Vitamin C 4.5g"} />
    <ProductCard productImg={ed2} productTitle={"Faces Canada Lip Color Balm Rose Petal Vitamin E 4.5g"} />
    <ProductCard productImg={ed3} productTitle={"Faces Canada Liquid Sindoor 2.5ml"} />
    <ProductCard productImg={ed4} productTitle={"Faces Canada Magnet Eyes Eyeliner Intense Black Dermatic Outlines 3.5ml"} />
    <ProductCard productImg={ed5} productTitle={"Faces Canada Magnet Eyes Kajal 24 HR Water Proof With Almond Oil 0.35g"} />
    <ProductCard productImg={ed6} productTitle={"Faces Canada Magnet Eyes Kajal+Eyeliner+Mascara 1s"} />
    </div>
  )
}

export default PersonalCare