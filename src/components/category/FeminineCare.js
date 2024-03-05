import React, { useEffect } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Med1 from "../../assets/images/feminineCareImg/fc1.jpg";
import Med2 from "../../assets/images/feminineCareImg/fc2.jpg";
import Med3 from "../../assets/images/feminineCareImg/fc3.jpg";
import Med4 from "../../assets/images/feminineCareImg/fc4.jpg";
import Med5 from "../../assets/images/feminineCareImg/fc5.jpg";
import Med6 from "../../assets/images/feminineCareImg/fc6.jpg";
import Med7 from "../../assets/images/feminineCareImg/fc7.jpg";
import Med8 from "../../assets/images/feminineCareImg/fc8.jpg";
import Med9 from "../../assets/images/feminineCareImg/fc9.jpg";
import Med10 from "../../assets/images/feminineCareImg/fc12.jpg";
import Med11 from "../../assets/images/feminineCareImg/fc11.png";
import Med12 from "../../assets/images/feminineCareImg/fc11.png";
//import Pagination from "../Pagination";


const FeminineCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/medicine2.webp)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">Feminine Care</h2>
      </section>
      <div className="container mx-auto p-40 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Feminine Care</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProdutsCarousel
            img={Med1}
            medName={"Carmesi Disposable Period Panties M-L (1×4) 1s"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med2}
            medName={"Carmesi Facial Razor For Women (1×3) 1s"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med3}
            medName={"Carmesi Panty Liners (1×60) 1s"}
            // medDetails={"10s Form-Gel"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med4}
            medName={"Carmesi Sensitive Sanitary Pads Rash Free (1×10) 1s"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med5}
            medName={"Good Vibes Brightening Face Serum Vitamin C 30ml"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med6}
            medName={"Hi Life Intimate Hygiene Spray (480 Spray) 60ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med7}
            medName={"Hi Life Silica Drops 1200 Drops 60ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med8}
            medName={"Hi Life Organic Periods Pads (1X10) 1s"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med9}
            medName={"Hi Life Organic Panty Liners With Wings (1X24) 1s"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med10}
            medName={"Hi Life Organic Period Pads (1×8) 1s"}
            // medDetails={"10s Form-Powder"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med11}
            medName={"Sofy Bodyfit Pads 16s"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med12}
            medName={"Sofy Bodyfit Pads Anti Bacteria XL"}
            // medDetails={"10s Form-Serum"}
            price={"12$"}
          />
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
};

export default FeminineCare;
