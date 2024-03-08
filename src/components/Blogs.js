import React, { useEffect } from "react";
import BlogsCoursel from "./BlogsCoursel";
import Medlogo from "../assets/images/medplusLogo.webp";
import Med1 from "../assets/images/blogimg1.jpg";
import Med2 from "../assets/images/blogimg2.png";
import Med3 from "../assets/images/blogimg3.png";
import Med4 from "../assets/images/blogimg4.png";
import Med5 from "../assets/images/blogimg5.png";
import Med6 from "../assets/images/blogimg6.png";
import Med7 from "../assets/images/blogimg7.png";
import Med8 from "../assets/images/blogimg8.png";
import Med9 from "../assets/images/blogimg9.png";
import Med10 from "../assets/images/blogimg10.png";
import Med11 from "../assets/images/blogimg11.png";
import Med12 from "../assets/images/blogimg12.png";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <h2 className=" text-[#3470a1] z-[2]">Blogs</h2>
      </section>
      <div className="container mx-auto p-3 ">
        <div className=" mx-9 mt-10 mb-20 grid grid-cols-1 smgrid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <BlogsCoursel
            img1={Medlogo}
            img={Med1}
            blogtitle={"Health"}
            blogName={"Soya Chunks' Nutritional Values and Health Benefits"}
            blogDetails={
              "Soya chunks are renowned for their impressive nutritional content, making them an…"
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med2}
            blogtitle={"Health"}
            blogName={"Controlling Hypertension to Live a Healthier Life"}
            blogDetails={
              "Our world moves quickly, so it's simple to forget the..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med3}
            blogtitle={"Health"}
            blogName={"How to Naturally Raise Your Platelet Count"}
            blogDetails={
              "Sustaining an appropriate platelet count is necessary for appropriate blood coagulation and..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med4}
            blogtitle={"Health"}
            blogName={"Natural Ways to Lessen Cold and Cough"}
            blogDetails={
              "With the changing of the seasons, the wave of colds and coughs might become..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med5}
            blogtitle={"Health"}
            blogName={"How Can Wintertime Hair Loss Be Prevented?"}
            blogDetails={
              "Wintertime hair loss can be caused by a number of things, such as dry..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img1={Medlogo}
            img={Med6}
            blogtitle={"Health"}
            blogName={
              "Herbal teas' advantages for reducing stress and promoting relaxation"
            }
            blogDetails={
              "Since ancient times, people have drank herbal tea for its many health advantages..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img={Med7}
            img1={Medlogo}
            blogtitle={"Health"}
            blogName={"Five Natural Ways to Treat Dry Skin in the Winter"}
            blogDetails={
              "When the winter cold comes in, a lot of us struggle with..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img={Med8}
            img1={Medlogo}
            blogtitle={"Health"}
            blogName={"How to Determine Your Skin Type and What It Is?"}
            blogDetails={
              "Since your skin is as distinct as you are, knowing its own characteristics..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img={Med9}
            img1={Medlogo}
            blogtitle={"Health"}
            blogName={
              "Six Items to Consume Daily to Promote Better Brain Health"
            }
            blogDetails={
              "Enhancing brain health is critical to general health and cognitive performance. Including the following..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img={Med10}
            img1={Medlogo}
            blogtitle={"Health"}
            blogName={"How to Reduce Skin Inflammation Naturally"}
            blogDetails={
              "Don't forget to run a patch test before applying any of these fixes..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img={Med11}
            img1={Medlogo}
            blogtitle={"Health"}
            blogName={"Six Things About High Blood Pressure You Should Know"}
            blogDetails={
              "Hypertension, another name for high blood pressure, is a frequent medical problem..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
          <BlogsCoursel
            img={Med12}
            img1={Medlogo}
            blogtitle={"Health"}
            blogName={"Five Easy Steps to Get Past a Weight Loss Plateau"}
            blogDetails={
              "It can be discouraging to reach a weight reduction plateau, but it's crucial to..."
            }
            blogpost={"MEDIPLUS PHARMACY"}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
