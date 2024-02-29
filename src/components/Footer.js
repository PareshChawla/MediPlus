import React from "react";
import logo from "../assets/images/medplusLogo.png";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <div className="w-full lg:flex lg:flex-row grid grid-cols-1 bg-[#333333] text-white p-5 px-20 justify-between">
      <div className="lg:w-[15%] w-full text-start pt-5">
        <img src={logo} alt="logo" />
        <p className="lg:text-base text-sm">
          Our goal is to enhance the healthcare industry in Delhi NCR by
          offering cutting-edge goods and services through pharma e-commerce and
          brick-and-mortar retail.
        </p>
      </div>
      <div className="text-sm lg:text-base pt-4 lg:pt-0">
        <h1 className="underline font-semibold pb-4">QUICK LINKS</h1>
        <ul className="list-image-rightarrow">
            <li className="hover:text-[#61CE70]"><Link to="/">Home</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/about">About Us</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/stores">Our Store</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/blogs">Blogs</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/return-policy">Return Policy</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div className="text-sm lg:text-base pt-4 lg:pt-0">
        <h1 className="underline font-semibold pb-4">CATEGORY</h1>
        <ul className="list-image-rightarrow">
            <li className="hover:text-[#61CE70]"><Link to="/category/prescription">Prescription</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/feminine-care">Feminine Care</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/health-supplements">Health Supplements</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/healthcare-devices">Healthcare Devices</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/derma-cosmetics">Derma cosmetics</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/herbal-preparations">Herbal Preparations</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/personal-care">Personal Care</Link></li>
            <li className="hover:text-[#61CE70]"><Link to="/category/energy-drinks">Energy Drinks</Link></li>
        </ul>
      </div>
      <div className="text-sm lg:text-base pt-4 lg:pt-0">
        <h1 className="underline font-semibold pb-4">CONTACT US</h1>
        <ul>
            <li className="flex items-center gap-2 hover:text-[#61CE70]"><FaPhoneAlt /> +918595986120</li>
            <li className="flex items-center gap-2 hover:text-[#61CE70]"><MdEmail />info@entrepreneurshipnetwork.net</li>
        </ul>
      </div>
    </div>
    <div className="bg-[#333333] flex justify-center text-white py-5 lg:text-base text-sm">
      <p className="border-t-2 w-[95%] text-center py-5">&copy; MedPlus 2024. All Rights Reserved By TEN Marketing</p>
    </div>
    </>
  );
};

export default Footer;
