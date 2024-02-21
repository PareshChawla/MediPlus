import React from "react";
import AboutUsImg from "../assets/images/about-us.png";

import { FaShippingFast } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import CardFullfillment from "./CardFullfillment";

const About = () => {
  return (
    <>
      <section className="bg-fixed bg-center bg-cover relative grid place-items-center  min-h-[460px] uppercase text-5xl font-bold bg-[url(/src/assets/images/Pharmacist_Behind.jpg)]">
        <div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #0084D6 -50%, #000000 100%)",
            opacity: 0.49,
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
          className="absolute top-0 left-0 w-full h-full opacity-50 "
        ></div>
        <h1 className=" text-white z-[2] text-[40px]">About Us</h1>
      </section>
      <div className="mb-5 m-2 px-4 pt-3 lg:m-3 lg:px-24">
        <div className="flex flex-col md:flex-row gap-10 ">
          <img
            className="w-full md:w-5/12 h-fit aspect-auto"
            src={AboutUsImg}
            alt="about us"
          />
          <div>
            <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              ABOUT US
            </h1>
            <div className="text-[#434f58] flex flex-col gap-5 mt-5">
              <p className="  lg:leading-7">
                Welcome to Pharmville Pharmacy, where health meets care, and
                convenience meets expertise. We are dedicated towards providing
                high-quality pharmaceutical services to our community, ensuring
                every individual has access to the best possible healthcare
                solutions.
              </p>
              <p className="lg:leading-7">
                At Pharmville, our mission is simple: to improve the health &
                wellbeing of community by providing high quality, most
                convenient, affordable and easy-to-access pharmacy services. We
                believe in going beyond just dispensing medications; we strive
                to be a trusted partner in your journey towards better health.
              </p>
              <p className=" lg:leading-7">
                <b>Quality Assurance:</b> We adhere to the highest retail pharma
                standards, ensuring that every product we dispense is of the
                utmost quality, and that our services meet or exceed regulatory
                requirements.
              </p>
              <p className="  lg:leading-7">
                <b>Personalized Care:</b> We understand that healthcare is not
                one-size-fits-all. Our experienced team is committed to
                providing personalized advice and support tailored to your
                unique need.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#434f58] flex flex-col gap-5 mt-5">
          <p className="  lg:leading-7">
            <b>Accessibility:</b> We believe that healthcare should be
            accessible to all. With convenient locations, extended hours, and an
            array of online services, we aim to make healthcare more attainable
            for everyone.
          </p>
          <p className="  lg:leading-7">
            <b>Availability:</b> With a wide range of prescription, over the
            counter medicine, fast moving consumer goods & diagnostic
            equipment’s we have more then 50k plus sku’s available in inventory
            to make community buying experience hassle free & affordable.
          </p>
          <p className=" lg:leading-7">
            Our team of dedicated pharmacists and healthcare professionals are
            the heart of Pharmville Pharmacy. With a wealth of experience and a
            genuine passion for helping others, they are here to guide you on
            your path towards better health and wellness. From medication
            consultations to lifestyle advice, you can trust that you are in
            capable and caring hands.
          </p>
          <p className="  lg:leading-7">
            We believe in giving back to the communities we serve. Pharmville
            Pharmacy actively participates in local initiatives and supports
            various charitable organizations dedicated to improving health
            outcomes and overall well-being.
          </p>
        </div>
      </div>
      <div className="m-5 my-10 lg:px-20 p-5 grid lg:flex gap-10 lg:justify-around">
        <CardFullfillment
          logo={<FaShippingFast size={60} color="#6CB250" />}
          title={"Free Shipping"}
          content={
            "We believe in making your shopping experience as seamless and cost-effective as possible. Enjoy Free Shipping on All Orders!"
          }
        />
        <CardFullfillment
          logo={<FaAmazonPay size={60} color="#6CB250" />}
          title={"Secure Payment"}
          content={
            "We at Mediplus recognize the value of safe online transactions. You can be confident that we have taken strong precautions to safeguard your credit card information."
          }
        />
        <CardFullfillment
          logo={<FaRegComments size={60} color="#6CB250" />}
          title={"24/7 Customer Support"}
          content={
            "Our staff is available to offer you timely and dependable service at any time. We are interested in your experience."
          }
        />
      </div>
    </>
  );
};

export default About;
