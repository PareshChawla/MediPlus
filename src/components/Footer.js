import React from "react";
import logo from "../assets/images/medplusLogo.png";
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
            <li className="hover:text-[#61CE70]">Home</li>
            <li className="hover:text-[#61CE70]">About Us</li>
            <li className="hover:text-[#61CE70]">Our Store</li>
            <li className="hover:text-[#61CE70]">Blogs</li>
            <li className="hover:text-[#61CE70]">Return Policy</li>
            <li className="hover:text-[#61CE70]">Privacy Policy</li>
            <li className="hover:text-[#61CE70]">Terms & Conditions</li>
            <li className="hover:text-[#61CE70]">FAQ</li>
        </ul>
      </div>
      <div className="text-sm lg:text-base pt-4 lg:pt-0">
        <h1 className="underline font-semibold pb-4">CATEGORY</h1>
        <ul className="list-image-rightarrow">
            <li className="hover:text-[#61CE70]">Prescription</li>
            <li className="hover:text-[#61CE70]">Feminine Care</li>
            <li className="hover:text-[#61CE70]">Health Supplements</li>
            <li className="hover:text-[#61CE70]">Healthcare Devices</li>
            <li className="hover:text-[#61CE70]">Derma cosmetics</li>
            <li className="hover:text-[#61CE70]">Herbal Preparations</li>
            <li className="hover:text-[#61CE70]">Personal Care</li>
            <li className="hover:text-[#61CE70]">Energy Drinks</li>
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
