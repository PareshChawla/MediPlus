import React from 'react';

const ProductCard = ({ productImg, productTitle }) => {
  return (
    <div className='flex flex-col w-[18%] justify-center items-center overflow-hidden'>
      <div className="w-64 object-fit relative overflow-hidden transform transition-transform duration-500 hover:scale-110">
        <img className='object-contain w-full h-full' src={productImg} alt="latest-product" />
      </div>
      <p className='mt-2 text-[#3470a1] hover:text-[#6cb250] font-bold'>{productTitle}</p>
      <button className='bg-[#6cb250] hover:bg-[#3470a1] text-white py-1.5 px-5 mt-10'>Shop Now</button>
    </div>
  );
};

export default ProductCard;
