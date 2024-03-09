import React from "react";
import BlogsCoursel from "./BlogsCoursel";
import Medlogo from "../assets/images/medplusLogo.webp";
import Med1 from "../assets/images/blogimg1.jpg";
import Med2 from "../assets/images/blogimg2.png";
import Med3 from "../assets/images/blogimg3.png";
import Med4 from "../assets/images/blogimg4.png";
import { Link } from "react-router-dom";

const LatestFromOurBlogs = () => {

  return (
    <>
      <div className="text-center mx-2 mb-16 bg-[#FBFCFC]">
        <h1 className="text-4xl text-[#3470a1] font-bold mt-10">
          Latest From Our Blogs
        </h1>
        <div className="border-t-2 border-[#3470a1] w-[8%] ml-[46%] mt-7"></div>
      </div>
      <div className="container mx-auto p-3 ">
        <div className=" mx-9 mt-2 grid grid-cols-1 smgrid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <BlogsCoursel
            img1={Medlogo}
            img={Med1}
            blogtitle={"Health"}
            blogName={<Link to="/health1">Soya Chunks' Nutritional Values and Health Benefits</Link>}
            blogDetails={
              "Soya chunks are renowned for their impressive nutritional content, making them an…"
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med2}
            blogtitle={"Health"}
            blogName={<Link to="/health2">Controlling Hypertension to Live a Healthier Life</Link>}
            blogDetails={
              "Our world moves quickly, so it's simple to forget the..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med3}
            blogtitle={"Health"}
            blogName={<Link to="/health3">How to Naturally Raise Your Platelet Count</Link>}
            blogDetails={
              "Sustaining an appropriate platelet count is necessary for appropriate blood coagulation and..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med4}
            blogtitle={"Health"}
            blogName={<Link to="/health4">Natural Ways to Lessen Cold and Cough</Link>}
            blogDetails={
              "With the changing of the seasons, the wave of colds and coughs might become..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
        </div>
      </div>
    </>
  );
};

export default LatestFromOurBlogs;
