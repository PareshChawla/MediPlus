import React from "react";
import AboutCard from "../homeAboutUs/AboutCard";
import { FaRegAddressBook } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";




const AboutUs = () => {
  return (
    <div className="bg-[#6CB250] text-white p-16 px-20 bg-opacity-90">
      <h1 className="text-2xl font-bold text-center py-4">ABOUT US</h1>
      <p className="text-center pb-2">
        We think it's important to give back to the communities we work in.
        Mediplus Pharmacy is involved in the community and supports a number of
        nonprofits that work to enhance people's health outcomes and overall well-being.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <AboutCard
          logo={<FaRegAddressBook size={60} />}
          title={"Prescription Filling"}
          content={
            "Quick and accurate prescription dispensing by our experienced pharmacists."
          }
        />
                <AboutCard
          logo={<FaRegBell size={60} />}
          title={"Medication Management"}
          content={
            "Personalized consultations to optimize your medication regimen."
          }
        />
                <AboutCard
          logo={<FaRegCalendarAlt size={60} />}
          title={"Compounding Services"}
          content={
            "Customized medications tailored to your unique requirements."
          }
        />
                <AboutCard
          logo={<FaRegEnvelope size={60} />}
          title={"Over-the-Counter Products"}
          content={
            "A wide range of high-quality OTC products for all your health needs."
          }
        />
      </div>
      <Link to="/about" className="w-full mt-4 mb-12">
        <button className="bg-[#3470a1] w-[50%] ml-[25%] md:w-[10%]  md:ml-[45%] py-3 rounded-md">Read More</button>
      </Link>
    </div>
  );
};

export default AboutUs;
