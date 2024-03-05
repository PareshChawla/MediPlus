import React, { useEffect } from "react";
import AboutUsImg from "../assets/images/about-us.png";

import { FaShippingFast } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import CardFullfillment from "./CardFullfillment";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              Welcome to Mediplus Pharmacy, where convenience meets knowledge and health meets care. 
              We are committed to offering our community top-notch pharmaceutical services and 
              making sure that everyone has access to the greatest medical treatments available.
              </p>
              <p className="lg:leading-7">
              Our goal at mediplus is to enhance community health and well-being by offering 
              pharmaceutical services that are of the highest calibre, most accessible, economical, and convenient. 
              Beyond simply giving out prescriptions, we want to be a reliable companion on your path to improved health.
              </p>
              <p className=" lg:leading-7">
                <b>Quality Assurance:</b> We guarantee that every product we dispense is of the highest calibre and 
                that our services either meet or surpass regulatory requirements by upholding the strictest retail pharmacy standards.
              </p>
              <p className="  lg:leading-7">
                <b>Personalized Care:</b> We understand that healthcare is not one-size-fits-all. 
                Our experienced team is committed to providing personalized advice and support tailored to your unique need.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#434f58] flex flex-col gap-5 mt-5">
          <p className="  lg:leading-7">
            <b>Accessibility:</b> We think everyone should have access to healthcare. 
            Our goal is to provide accessibility to healthcare for everyone by offering 
            a range of online services, convenient locations, and extended hours.
          </p>
          <p className="  lg:leading-7">
            <b>Availability:</b> We offer more than 50,000 SKUs of prescription, 
            over-the-counter, fast-moving consumer items, and diagnostic equipment in our inventory, 
            making community shopping convenient and reasonably priced.
          </p>
          <p className=" lg:leading-7">
          The core of mediplus Pharmacy is our group of committed chemists and medical specialists. 
          They are here to help you on your journey towards improved health and wellness because they 
          have a lot of knowledge and a sincere enthusiasm for helping people. You may rely on 
          competent and compassionate hands for anything from medicine consultations to lifestyle guidance.
          </p>
          <p className="  lg:leading-7">
          We think it's important to give back to the communities we work in. mediplus Pharmacy is involved 
          in the community and supports a number of nonprofits that work to enhance people's health and well-being.
          </p>
        </div>
      </div>
      <div className="m-5 my-10 lg:px-20 p-5 grid lg:flex gap-10 lg:justify-around">
        <CardFullfillment
          logo={<FaShippingFast size={60} color="#6CB250" />}
          title={"Free Shipping"}
          content={
            "Our goal is to provide you with the most convenient and economical purchasing experience possible. Get Free Delivery on All Orders!"
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
