import React from "react";
import { Link } from "react-router-dom";

const BlogsCarousel = ({
  img,
  img1,
  blogtitle,
  blogName,
  blogDetails,
  blogpost,
}) => {
  return (
    <div className="bg-white shadow-md p-5 mb-5 m-2 px-2 pt-4 lg:m-2 overflow-hidden flex flex-col">
      <div className="w-45 object-fit relative overflow-hidden transform transition-transform duration-500 hover:scale-110">
        <img className="object-contain w-full h-full" src={img} alt="blogs" />
      </div>
      <Link to="/health">
        <p className="text-gray-600 text-lg mt-5 ml-6 mx-4 hover:text-[#6cb250] mb-2 cursor-pointer">
          {blogtitle}
        </p>
      </Link>
      <h2 className="mt-2 mx-6 text-xl text-[#3470a1] cursor-pointer font-bold">
        {blogName}
      </h2>
      <div className="mt-3 mx-6 flex-grow ">
        <p className="text-gray-600 text-ls">{blogDetails}</p>
      </div>
      <div className="mr-2 flex justify-between items-end">
        <div className="flex items-center ml-5 pt-8 ">
          <img
            className="mr-1 mt-1 cursor-pointer w-15 h-4"
            src={img1}
            alt="blogs"
          />
          <Link to="/mediplusPharmacy">
            <p className="hover:text-[#6cb250] text-xs font-mono cursor-pointer">
              {blogpost}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default BlogsCarousel;
