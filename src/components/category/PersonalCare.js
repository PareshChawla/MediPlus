import React, { useEffect } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Med1 from "../../assets/images/personalCareImg/pc1.jpg";
import Med2 from "../../assets/images/personalCareImg/pc2.jpg";
import Med3 from "../../assets/images/personalCareImg/pc3.jpg";
import Med4 from "../../assets/images/personalCareImg/pc4.jpg";
import Med5 from "../../assets/images/personalCareImg/pc5.jpg";
import Med6 from "../../assets/images/personalCareImg/pc6.jpg";
import Med7 from "../../assets/images/personalCareImg/pc7.jpg";
import Med8 from "../../assets/images/personalCareImg/pc8.jpg";
import Med9 from "../../assets/images/personalCareImg/pc9.jpg";
import Med10 from "../../assets/images/personalCareImg/pc10.jpg";
import Med11 from "../../assets/images/personalCareImg/pc11.jpg";
import Med12 from "../../assets/images/personalCareImg/pc12.jpg";
//import Pagination from "../Pagination";


const PersonalCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/medicine2.webp)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">PersonalCare</h2>
      </section>
      <div className="container mx-auto p-40 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Health Supplements</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProdutsCarousel
            img={Med1}
            medName={"Faces Canada Lip Balm Orange Mint Vitamin C 4.5g"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med2}
            medName={"Faces Canada Lip Color Balm Rose Petal Vitamin E 4.5g"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med3}
            medName={"Faces Canada Liquid Sindoor 2.5ml"}
            // medDetails={"10s Form-Gel"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med4}
            medName={"Faces Canada Magnet Eyes Eyeliner Intense Black Dermatic Outlines 3.5ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med5}
            medName={"Faces Canada Magnet Eyes Kajal 24 HR Water Proof With Almond Oil 0.35g"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med6}
            medName={"Faces Canada Magnet Eyes Kajal+Eyeliner+Mascara 1s"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med7}
            medName={"Faces Canada Magneteyes Dramatic Volumizing Mascara Dense Lashes Lightweight With Almond Oil 9.5ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med8}
            medName={"Faces Canada Nail Enamel Ultime Pro Splash CC5838 8ml"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med9}
            medName={"Faces Canada Nail Enamel Ultime Pro Splash CC5841 8ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med10}
            medName={"Faces Canada Nail Enamel Ultime Pro Splash CC5847 8ml"}
            // medDetails={"10s Form-Powder"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med11}
            medName={"Faces Canada Nail Enamel Ultime Pro Splash CC5867 8ml"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med12}
            medName={"Faces Canada Nail Enamel Ultime Pro Splash CC5874 8ml"}
            // medDetails={"10s Form-Serum"}
            price={"12$"}
          />
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
};

export default PersonalCare;