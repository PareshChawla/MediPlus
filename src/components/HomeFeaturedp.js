import React from 'react'
import { Link } from "react-router-dom";

const HomeFeaturedp = ({ img, medName, rating }) => {
    return (
        <div className="bg-white p-4 mb-5 mr-50 px-4 pt-8 flex flex-col items-center">
            <div className="overflow-hidden transform transition-transform duration-500 hover:scale-110">
                <img className="object-contain w-full h-full" src={img} alt="products" />
            </div>
            <h2 className="mt-2 text-[#3470a1] hover:text-[#6cb250] font-bold text-center">{medName}</h2>
            {rating && (
                <div className="flex mt-2">
                    {[...Array(rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
                            <path fill="currentColor" d="M12 2l2.121 6.485H22l-5.433 3.952 2.121 6.485L12 16.485l-5.688 4.447 2.121-6.485L2 8.485h7.879z" />
                        </svg>
                    ))}
                </div>
            )}

            <Link to="/upload">
                <button className="bg-[#6cb250] hover:bg-[#3470a1] text-white py-1.5 px-5 mt-4">
                    Shop Now
                </button>
            </Link>
        </div>
    )
}

export default HomeFeaturedp
