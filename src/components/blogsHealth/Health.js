import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div className="mx-9 mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">
          <HealthCoursel
            img={Med1}
            to="/health1"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health1">
                Soya Chunks' Nutritional Values and HEALT Benefits
              </Link>
            }
            healthDetails={
              "Soya chunks are well known for having a high nutritional content, which makes them a great way to get the important nutrients you need to stay healthy and happy overall. Let's examine in more detail the nutritional qualities and health advantages that make soy chunks a worthwhile..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med2}
            to="/health2"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health2">
                Controlling Hypertension to Live a Healthier Life
              </Link>
            }
            healthDetails={
              "Our fast-paced society makes it simple to ignore the quiet danger that frequently resides within of us: hypertension, or elevated blood pressure. It's important to take control of your blood pressure; it's not just an issue of numbers..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med3}
            to="/health3"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health3">
                How to Naturally Raise Your Platelet Count
              </Link>
            }
            healthDetails={
              "Sustaining a healthy platelet count is critical for appropriate blood coagulation and general health. Although certain medical disorders might affect platelet counts, leading a healthy lifestyle and include certain foods in your diet can encourage your body to naturally produce more platelets. Within this blog..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med4}
            to="/health4"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health4">Natural Ways to Lessen Cold and Cough</Link>
            }
            healthDetails={
              "As the seasons change, the onslaught of coughs and colds can become an unwelcome companion. While pharmaceutical options are readily available, many people prefer exploring natural remedies to ease their symptoms. In this blog post, we’ll delve into a variety..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med5}
            to="/health5"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health5">
                How Can Wintertime Hair Loss Be Prevented?
              </Link>
            }
            healthDetails={
              "Wintertime hair loss can be caused by a number of things, such as dry, cold weather, dehydration, and other environmental variables. Many of us have to deal with an unwanted companion as winter approaches: an increase in..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med6}
            to="/health6"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health6">
                Herbal teas' advantages for reducing stress and promoting
                relaxation
              </Link>
            }
            healthDetails={
              "Herbal tea has been consumed for centuries for its various health benefits, including stress relief and relaxation. While individual responses may vary, many herbal teas are believed to offer calming effects that can help alleviate stress. Here are some potential..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med7}
            to="/health7"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health7">
                Five Natural Ways to Treat Dry Skin in the Winter
              </Link>
            }
            healthDetails={
              "Many of us struggle with dry skin, an unwanted companion as the winter frost sets in. Intense heat, dry air, and strong winds can deplete the skin's natural moisture content, leaving it tight, flaking, and painful..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med8}
            to="/health8"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health8">
                How to Determine Your Skin Type and What It Is?
              </Link>
            }
            healthDetails={
              "Understanding your skin's particular needs is the first step to having a healthy, beautiful complexion because your skin is as unique as you are. Identifying your skin type is essential to creating a customized skincare regimen that takes into account the unique characteristics of your skin..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med9}
            to="/health9"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health9">
                Six Items to Consume Daily to Promote Better Brain Health
              </Link>
            }
            healthDetails={
              "Improving brain health is essential for overall well-being and cognitive function. Including certain foods in your daily diet can contribute to better brain health. A balanced diet that includes a variety of nutrients is essential for overall brain health. Additionally..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med10}
            to="/health10"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health10">
                How to Reduce Skin Inflammation Naturally
              </Link>
            }
            healthDetails={
              "To make sure you don't have an allergic reaction, alwaysremember to do a patch test before taking any of thesetreatments. Seek more guidance and treatment alternatives from a healthcare provider if your skin condition gets worse or continues. These are.."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med11}
            to="/health11"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health11">
                Six Things About High Blood Pressure You Should Know
              </Link>
            }
            healthDetails={
              "Elevated amounts of pressure in the arteries are a frequent medical disease known as hypertension, or high blood pressure. This implies that pumping blood through the circulatory system requires more effort from the heart. It is often mentioned..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
          <HealthCoursel
            img={Med12}
            to="/health12"
            healthtitle={"HEALTH"}
            healthName={
              <Link to="/health12">
                Five Easy Steps to Get Past a Weight Loss Plateau
              </Link>
            }
            healthDetails={
              "Although reaching a weight reduction plateau can be discouraging, it's crucial to keep in mind that this is a typical stage of the process. The good news is that you can persevere and keep producing progress by using these easy and efficient tactics..."
            }
            healthpost={"MEDIPLUS PHARMACY"}
          />
        </div>
      </div>
    </>
  );
};

export default Health;
