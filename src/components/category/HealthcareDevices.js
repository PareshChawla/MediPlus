import React, { useEffect } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Med1 from "../../assets/images/healthcaredevicesimg/hd1.jpg";
import Med2 from "../../assets/images/healthcaredevicesimg/hd2.jpg";
import Med3 from "../../assets/images/healthcaredevicesimg/hd3.jpg";
import Med4 from "../../assets/images/healthcaredevicesimg/hd4.jpg";

const HealthcareDevices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 "></div>
        <h2 className="text-white z-[2] text-center">Healthcare Devices</h2>
      </section>
      <div className="container mx-auto p-6 md:p-12 lg:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <ProdutsCarousel
            img={Med1}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate 1Kg"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med2}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med3}
            medName={"Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med4}
            medName={"Genetic Nutrition Cap CLA (1×60) 1s"}
            price={"12$"}
          />
        </div>
      </div>
    </>
  );
};

export default HealthcareDevices;
