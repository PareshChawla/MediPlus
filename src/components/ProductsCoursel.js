import React from 'react'

const ProductsCoursel = ({img, medName, medDetails, price}) => {
  return (
    <div className="bg-white shadow-md p-4 mb-5 m-2 px-4 pt-8 lg:m-5 ">
          <h2 className="text-xl font-bold mb-2">{medName}</h2>
          <img className='' src={img} alt="products" />
          <p className="text-gray-600 mb-2">{medDetails}</p>
          <p className="text-gray-800 font-bold">{price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
  )
}

export default ProductsCoursel

