import React, { useEffect } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Med1 from "../../assets/images/healthSupplementImg/hs1.jpg";
import Med2 from "../../assets/images/healthSupplementImg/hs2.jpg";
import Med3 from "../../assets/images/healthSupplementImg/hs3.jpg";
import Med4 from "../../assets/images/healthSupplementImg/hs4.jpg";
import Med5 from "../../assets/images/healthSupplementImg/hs5.jpg";
import Med6 from "../../assets/images/healthSupplementImg/hs6.jpg";
import Med7 from "../../assets/images/healthSupplementImg/hs1.jpg";
import Med8 from "../../assets/images/healthSupplementImg/hs2.jpg";
import Med9 from "../../assets/images/healthSupplementImg/hs3.jpg";
import Med10 from "../../assets/images/healthSupplementImg/hs4.jpg";
import Med11 from "../../assets/images/healthSupplementImg/hs5.jpg";
import Med12 from "../../assets/images/healthSupplementImg/hs6.jpg";

const HealthSupplements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 "></div>
        <h2 className="text-white z-[2] text-center">Health Supplements</h2>
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
          <ProdutsCarousel
            img={Med5}
            medName={"Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med6}
            medName={"Genetic Nutrition Cap Mega Probiotics (1×30) 1s"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med7}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate 1Kg"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med8}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med9}
            medName={"Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med10}
            medName={"Genetic Nutrition Cap CLA (1×60) 1s"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med11}
            medName={"Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med12}
            medName={"Genetic Nutrition Cap Mega Probiotics (1×30) 1s"}
            price={"12$"}
          />
        </div>
      </div>
    </>
  );
};

export default HealthSupplements;
