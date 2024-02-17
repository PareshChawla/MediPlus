import React, { useState } from "react";
import logo from "../assets/images/medplusLogo.webp";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(true);
  };

  const handleCloseClick = () => {
    setMenu(false);
  }
  return (
    <>
      <div className="lg:w-full flex justify-between md:h-[10vh] h-[8vh] items-center m-2 lg:p-2">
        <div>
          <Link to="/">
            <img className="h-12 mt-2 md:h-14 md:mt-4" src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-8 font-semibold mr-20 text-sm cursor-pointer">
          <Link to="/">
            <li className="hover:text-blue-400">HOME</li>
          </Link>
          <Link to="/about"><li className="hover:text-blue-400">ABOUT US</li></Link>
          <Link to="products"><li className="hover:text-blue-400">PRODUCTS</li></Link>
          <Link to="/stores"><li className="hover:text-blue-400">OUR STORES</li></Link>
          <Link to="blogs"><li className="hover:text-blue-400">BLOGS</li></Link>
          <Link to="/contact"><li className="hover:text-blue-400">CONTACT US</li></Link>
        </ul>
        <h1 className="hidden md:block font-semibold text-red-500 mr-10 hover:text-green-500 cursor-pointer">
          Upload Prescription
        </h1>
        <div className="hidden md:flex gap-5 mr-5">
          <div className="mr-3">
            <RiSearchLine size={20} />
          </div>
          <BiLogoFacebookCircle size={18} />
          <FaSquareXTwitter size={18} />
          <BiLogoInstagramAlt size={18} />
          <BiLogoLinkedinSquare size={18} />
          <BiLogoYoutube size={18} />
        </div>
        <div
          className="lg:hidden flex bg-gray-200 items-center gap-2 m-2 p-2"
          onClick={handleMenuClick}
        >
          <GiHamburgerMenu />
          <h1>Menu</h1>
        </div>
      </div>
      {menu && (
        <div className="lg:hidden block bg-[#121519fa] h-[100vh] w-[40%] top-0 right-0 absolute animate">
          <div className="flex mr-2 p-2 justify-end" onClick={handleCloseClick}>
            <IoIosClose color="white" />
          </div>
          <div className="flex flex-col justify-center items-start w-full text-white text-xl p-5">
            <h1 className="hover:text-green-500 py-2 border-t-2 border-gray-700 w-full">
              Home
            </h1>
            <h1 className="hover:text-green-500 py-2 border-t-2 border-gray-700 w-full">
              About Us
            </h1>
            <h1 className="hover:text-green-500 py-2 border-t-2 border-gray-700 w-full">
              Products
            </h1>
            <h1 className="hover:text-green-500 py-2 border-t-2 border-gray-700 w-full">
              Our Stores
            </h1>
            <h1 className="hover:text-green-500 py-2 border-t-2 border-gray-700 w-full">
              Blogs
            </h1>
            <h1 className="hover:text-green-500 py-2 border-t-2 border-b-2 border-gray-700 w-full">
              Contact Us
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Header