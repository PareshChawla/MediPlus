import React from "react";
import thermoImg from "../assets/images/thermoImg.jpg";
import gncImg from "../assets/images/gncImg.jpg";
import bannerImg from "../assets/images/bannerImg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicineCarousel from "./MedicineCarousel";
import Pads from "../assets/images/pads.jpg";
import Energy from "../assets/images/enegy-drink.jpg";
import Ointment from "../assets/images/Ointment.jpg";
import Lotion from "../assets/images/lotion.jpg";
import BCare from "../assets/images/himalya.jpg";
import DCare from "../assets/images/derma.jpg";
import FCare from "../assets/images/faminies.jpg";
import PCare from "../assets/images/personal-care-1.jpg";
import EyeDrop from "../assets/images/eyedrop.jpg";
import Sexual from "../assets/images/sexual.jpg";
import SCare from "../assets/images/skin-acre.jpg";
import OTC from "../assets/images/otc.jpg";
import HCare from "../assets/images/hair-care-protficojdfv.jpg";
import HealthSupp from "../assets/images/health-supplement.jpg";
import Herbal from "../assets/images/helbal.jpg";
import { FaShippingFast } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

import Surgical from "../assets/images/surgical-120x120.jpg";
import Welcome from "./Welcome";
import CardFullfillment from "./CardFullfillment";
import LatestProducts from "./LatestProducts";
import AboutUs from "./homeAboutUs/AboutUs";

const PrevArrow = () => {
  return <div className="hidden"></div>;
};

const NextArrow = () => {
  return <div className="hidden"></div>;
};

const Home = ({ img, medName }) => {
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full p-2">
        <div>
          <Slider {...settings1}>
            <img className="w-full" src={thermoImg} alt="Img1" />
            <img className="w-full" src={gncImg} alt="Img1" />
            <img className="w-full" src={bannerImg} alt="Img1" />
          </Slider>
        </div>
      </div>
      <Slider {...settings2} className="w-[80%] ml-[10%] m-5 p-5">
        <MedicineCarousel img={Pads} medName={"Sanitary Pads"} />
        <MedicineCarousel img={Energy} medName={"Energy Drinks"} />
        <MedicineCarousel img={Ointment} medName={"Ointment"} />
        <MedicineCarousel img={Lotion} medName={"Lotion"} />
        <MedicineCarousel img={BCare} medName={"Baby Care"} />
        <MedicineCarousel img={DCare} medName={"Derma Cosmetics"} />
        <MedicineCarousel img={FCare} medName={"Feminine Care"} />
        <MedicineCarousel img={PCare} medName={"Personal Care"} />
        <MedicineCarousel img={EyeDrop} medName={"Eye Drop"} />
        <MedicineCarousel img={Sexual} medName={"Sexual Wellness"} />
        <MedicineCarousel img={SCare} medName={"Skin Care"} />
        <MedicineCarousel img={OTC} medName={"OTC"} />
        <MedicineCarousel img={HCare} medName={"Haircare Product"} />
        <MedicineCarousel img={HealthSupp} medName={"Health Supplements"} />
        <MedicineCarousel img={Herbal} medName={"Herbal Preparations"} />
        <MedicineCarousel img={Surgical} medName={"Surgical"} />
      </Slider>
      <Welcome />
      <div className="m-5 my-10 lg:px-20 p-5 grid lg:flex gap-10 lg:justify-around bg-[#FBFCFC]">
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
          <LatestProducts />
          <AboutUs />
    </>
  );
};

export default Home;
