import React, { useEffect } from "react";
import HealthCoursel from "./HealthCoursel";
import Med1 from "../../assets/images/blogimg1.jpg";
import Med2 from "../../assets/images/blogimg2.png";
import Med3 from "../../assets/images/blogimg3.png";
import Med4 from "../../assets/images/blogimg4.png";
import Med5 from "../../assets/images/blogimg5.png";
import Med6 from "../../assets/images/blogimg6.png";
import Med7 from "../../assets/images/blogimg7.png";
import Med8 from "../../assets/images/blogimg8.png";
import Med9 from "../../assets/images/blogimg9.png";
import Med10 from "../../assets/images/blogimg10.png";
import Med11 from "../../assets/images/blogimg11.png";
import Med12 from "../../assets/images/blogimg12.png";

const Health = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="relative grid place-items-center h-96 text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <h2 className=" text-[#3470a1] z-[2]">Health</h2>
      </section>
      <div className="container mx-auto px-8 ">
        <div className="mx-9 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">
          <HealthCoursel
            img={Med1}
            healthtitle={"HEALTH"}
            healthName={"Soya Chunks' Nutritional Values and HEALT Benefits"}
            healthDetails={
              "Soya chunks are well known for having a high nutritional content, which makes them a great way to get the important nutrients you need to stay healthy and happy overall. Let's examine in more detail the nutritional qualities and health advantages that make soy chunks a worthwhile"
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med2}
            healthtitle={"HEALTH"}
            healthName={"Controlling Hypertension to Live a Healthier Life"}
            healthDetails={
              "Our world moves quickly, so it's simple to forget the..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med3}
            healthtitle={"HEALTH"}
            healthName={"How to Naturally Raise Your Platelet Count"}
            healthDetails={
              "Sustaining an appropriate platelet count is necessary for appropriate blood coagulation and..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med4}
            healthtitle={"HEALTH"}
            healthName={"Natural Ways to Lessen Cold and Cough"}
            healthDetails={
              "With the changing of the seasons, the wave of colds and coughs might become..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med5}
            healthtitle={"HEALTH"}
            healthName={"How Can Wintertime Hair Loss Be Prevented?"}
            healthDetails={
              "Wintertime hair loss can be caused by a number of things, such as dry..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med6}
            healthtitle={"HEALTH"}
            healthName={
              "Herbal teas' advantages for reducing stress and promoting relaxation"
            }
            healthDetails={
              "Since ancient times, people have drank herbal tea for its many health advantages..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med7}
            healthtitle={"HEALTH"}
            healthName={"Five Natural Ways to Treat Dry Skin in the Winter"}
            healthDetails={
              "When the winter cold comes in, a lot of us struggle with..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med8}
            healthtitle={"HEALTH"}
            healthName={"How to Determine Your Skin Type and What It Is?"}
            healthDetails={
              "Since your skin is as distinct as you are, knowing its own characteristics..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med9}
            healthtitle={"HEALTH"}
            healthName={
              "Six Items to Consume Daily to Promote Better Brain Health"
            }
            healthDetails={
              "Enhancing brain health is critical to general health and cognitive performance. Including the following..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med10}
            healthtitle={"HEALTH"}
            healthName={"How to Reduce Skin Inflammation Naturally"}
            healthDetails={
              "Don't forget to run a patch test before applying any of these fixes..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med11}
            healthtitle={"HEALTH"}
            healthName={"Six Things About High Blood Pressure You Should Know"}
            healthDetails={
              "Hypertension, another name for high blood pressure, is a frequent medical problem..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med12}
            healthtitle={"HEALTH"}
            healthName={"Five Easy Steps to Get Past a Weight Loss Plateau"}
            healthDetails={
              "It can be discouraging to reach a weight reduction plateau, but it's crucial to..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
        </div>
      </div>
    </>
  );
};

export default Health;
