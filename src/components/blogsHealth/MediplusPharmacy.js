import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import medlogo from "../../assets/images/medilogo1.jpg";
import MediplusPharmacyCoursel from "./MediplusPharmacyCarousel";
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

const MediplusPharmacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className=" relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="py-2  flex flex-col items-center justify-center w-full">
          <div className="rounded-full overflow-hidden  bg-white w-16 h-16 mb-2">
            <img
              className="object-contain w-full h-full"
              src={medlogo}
              alt="mediplus"
            />
          </div>
          <header className="py-1 pb-2  w-full text-3xl h-19 px-9 font-bold items-center justify-center flex flex-col">
            <h2 className="text-[#3470a1] z-[2]">Mediplus Pharmacy</h2>
          </header>
          <h2 className=" py-4 text-xs flex flex-col items-center justify-center">
            <div>
              <p className=" pb-1 text-[#757c81] font-bold">
                JOINED: SEPTEMBER 6,
                2023&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;ARTICLES:
                14&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;COMMENTS: 2
              </p>
            </div>
          </h2>
          <Link to="/">
            <div className="Globe bg-[#567c35] w-9 h-9 mb-2 rounded-full overflow-hidden border flex items-center justify-center transition-colors duration-300 hover:bg-[#4e6732]">
              <div className="text-[#ffffff] font-semibold duration-400 hover:bg-[#4e6732]">
                <BsGlobe size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className=" container mx-auto px-8 ">
        <div className=" mx-9 mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">
          <MediplusPharmacyCoursel
            img={Med2}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health2">
                Controlling Hypertension to Live a Healthier Life
              </Link>
            }
            mediplusDetails={
              "Our fast-paced society makes it simple to ignore the quiet danger that frequently resides within of us: hypertension, or elevated blood pressure. It's important to take control of your blood pressure; it's not just an issue of numbers..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />

          <MediplusPharmacyCoursel
            img={Med5}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health5">
                How Can Wintertime Hair Loss Be Prevented?
              </Link>
            }
            mediplusDetails={
              "Wintertime hair loss can be caused by a number of things, such as dry, cold weather, dehydration, and other environmental variables. Many of us have to deal with an unwanted companion as winter approaches: an increase in..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />

          <MediplusPharmacyCoursel
            img={Med3}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health3">
                How to Naturally Raise Your Platelet Count
              </Link>
            }
            mediplusDetails={
              "Sustaining a healthy platelet count is critical for appropriate blood coagulation and general health. Although certain medical disorders might affect platelet counts, leading a healthy lifestyle and include certain foods in your diet can encourage your body to naturally produce more platelets. Within this blog..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med6}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health6">
                Herbal teas' advantages for reducing stress and promoting
                relaxation
              </Link>
            }
            mediplusDetails={
              "Herbal tea has been consumed for centuries for its various health benefits, including stress relief and relaxation. While individual responses may vary, many herbal teas are believed to offer calming effects that can help alleviate stress. Here are some potential..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />

          <MediplusPharmacyCoursel
            img={Med1}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health1">
                Soya Chunks' Nutritional Values and HEALT Benefits
              </Link>
            }
            mediplusDetails={
              "Soya chunks are well known for having a high nutritional content, which makes them a great way to get the important nutrients you need to stay healthy and happy overall. Let's examine in more detail the nutritional qualities and health advantages that make soy chunks a worthwhile..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />

          <MediplusPharmacyCoursel
            img={Med4}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health4">Natural Ways to Lessen Cold and Cough</Link>
            }
            mediplusDetails={
              "As the seasons change, the onslaught of coughs and colds can become an unwelcome companion. While pharmaceutical options are readily available, many people prefer exploring natural remedies to ease their symptoms. In this blog post, we’ll delve into a variety..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med7}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health7">
                Five Natural Ways to Treat Dry Skin in the Winter
              </Link>
            }
            mediplusDetails={
              "Many of us struggle with dry skin, an unwanted companion as the winter frost sets in. Intense heat, dry air, and strong winds can deplete the skin's natural moisture content, leaving it tight, flaking, and painful..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med8}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health8">
                How to Determine Your Skin Type and What It Is?
              </Link>
            }
            mediplusDetails={
              "Understanding your skin's particular needs is the first step to having a healthy, beautiful complexion because your skin is as unique as you are. Identifying your skin type is essential to creating a customized skincare regimen that takes into account the unique characteristics of your skin..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med9}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health9">
                Six Items to Consume Daily to Promote Better Brain Health
              </Link>
            }
            mediplusDetails={
              "Improving brain health is essential for overall well-being and cognitive function. Including certain foods in your daily diet can contribute to better brain health. A balanced diet that includes a variety of nutrients is essential for overall brain health. Additionally..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med10}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health10">
                How to Reduce Skin Inflammation Naturally
              </Link>
            }
            mediplusDetails={
              "To make sure you don't have an allergic reaction, alwaysremember to do a patch test before taking any of thesetreatments. Seek more guidance and treatment alternatives from a healthcare provider if your skin condition gets worse or continues. These are.."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med11}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health11">
                Six Things About High Blood Pressure You Should Know
              </Link>
            }
            mediplusDetails={
              "Elevated amounts of pressure in the arteries are a frequent medical disease known as hypertension, or high blood pressure. This implies that pumping blood through the circulatory system requires more effort from the heart. It is often mentioned..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
          <MediplusPharmacyCoursel
            img={Med12}
            mediplustitle={"HEALTH"}
            mediplusName={
              <Link to="/health12">
                Five Easy Steps to Get Past a Weight Loss Plateau
              </Link>
            }
            mediplusDetails={
              "Although reaching a weight reduction plateau can be discouraging, it's crucial to keep in mind that this is a typical stage of the process. The good news is that you can persevere and keep producing progress by using these easy and efficient tactics..."
            }
            medipluspost={"MEDIPLUS PHARMACY"}
          />
        </div>
      </div>
    </>
  );
};

export default MediplusPharmacy;
