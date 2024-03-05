
import React, { useEffect } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Med1 from "../../assets/images/healthcaredevicesimg/hd1.jpg";
import Med2 from "../../assets/images/healthcaredevicesimg/hd2.jpg";
import Med3 from "../../assets/images/healthcaredevicesimg/hd3.jpg";
import Med4 from "../../assets/images/healthcaredevicesimg/hd4.jpg";
// import Med5 from "../../assets/images/";
// import Med6 from "../../assets/images/";
// import Med7 from "../../assets/images/";
// import Med8 from "../../assets/images/";
// import Med9 from "../../assets/images/";
// import Med10 from "../../assets/images/";
// import Med11 from "../../assets/images/";
// import Med12 from "../../assets/images/";
//import Pagination from "../Pagination";


const HealthcareDevices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/medicine2.webp)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">HealthcareDevices</h2>
      </section>
      <div className="container mx-auto p-40 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Health Supplements</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProdutsCarousel
            img={Med1}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate 1Kg"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med2}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med3}
            medName={"Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s"}
            // medDetails={"10s Form-Gel"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med4}
            medName={"Genetic Nutrition Cap CLA (1×60) 1s"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          {/* <ProdutsCarousel
            img={Med5}
            medName={"Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med6}
            medName={"Genetic Nutrition Cap Mega Probiotics (1×30) 1s"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med7}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate 1Kg"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med8}
            medName={"Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med9}
            medName={"Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med10}
            medName={"Genetic Nutrition Cap CLA (1×60) 1s"}
            // medDetails={"10s Form-Powder"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med11}
            medName={"Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med12}
            medName={"Genetic Nutrition Cap Mega Probiotics (1×30) 1s"}
            // medDetails={"10s Form-Serum"}
            price={"12$"}
          /> */}
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
};

export default HealthcareDevices;



