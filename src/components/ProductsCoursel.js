import React from 'react'

const ProductsCoursel = ({ img, medName, medDetails, price }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-5 m-2 px-4 pt-8 lg:m-5  flex flex-col items-center justify-center ">
      <div className="w-45 object-fit relative overflow-hidden transform transition-transform duration-500 hover:scale-110">
        <img className="object-contain w-full h-full" src={img} alt="products" />
      </div>
      <h2 className="mt-2 text-[#3470a1] hover:text-[#6cb250] font-bold text-center">{medName}</h2>
      <p className="text-gray-600 mb-2 text-center">{medDetails}</p>
      <p className="text-gray-800 font-bold text-center">{price}</p>
      <button className="bg-[#6cb250] hover:bg-[#3470a1] text-white py-1.5 px-5 mt-auto">
        Shop Now
      </button>
    </div>
  )
}

export default ProductsCoursel
