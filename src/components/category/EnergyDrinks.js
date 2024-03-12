import React, { useEffect } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Dropdown from "../Dropdown";
import Med1 from "../../assets/images/energyDrinkImg/1ed.jpg";
import Med2 from "../../assets/images/energyDrinkImg/2ed.jpg";
import Med3 from "../../assets/images/energyDrinkImg/3ed.jpg";
import Med4 from "../../assets/images/energyDrinkImg/4ed.jpg";
import Med5 from "../../assets/images/energyDrinkImg/5ed.jpg";
import Med6 from "../../assets/images/energyDrinkImg/6ed.jpg";
import Med7 from "../../assets/images/energyDrinkImg/1ed.jpg";
import Med8 from "../../assets/images/energyDrinkImg/2ed.jpg";
import Med9 from "../../assets/images/energyDrinkImg/3ed.jpg";
import Med10 from "../../assets/images/energyDrinkImg/4ed.jpg";
import Med11 from "../../assets/images/energyDrinkImg/5ed.jpg";
import Med12 from "../../assets/images/energyDrinkImg/6ed.jpg";
//import Pagination from "../Pagination";


const EnergyDrinks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/medicine2.webp)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">EnergyDrinks</h2>
      </section>
      
      <div className="container mx-auto p-40 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Health Supplements</h1> */}
        <Dropdown/>
      <br/>
      <br/>
      <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProdutsCarousel
            img={Med1}
            medName={"Armr Anti Hangover Shot Apple 60ml"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med2}
            medName={"Armr Anti Hangover Shot Blackberry 60ml"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med3}
            medName={"Armr Daily Detox Shot With Activated Charcoal 60ml"}
            // medDetails={"10s Form-Gel"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med4}
            medName={"Armr Lemonick Anti Hangover Shot Lemon 60ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med5}
            medName={"Armr Pro Immunity Shot Kadha 2.0 60ml"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med6}
            medName={"Armr Weight Management Shot With Apple Cider Vinegar 60ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med7}
            medName={"Armr Anti Hangover Shot Apple 60ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med8}
            medName={"Armr Anti Hangover Shot Blackberry 60ml"}
            // medDetails={"10s Form-Syrup"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med9}
            medName={"Armr Daily Detox Shot With Activated Charcoal 60ml"}
            // medDetails={"10s Form-Capsule"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med10}
            medName={"Armr Lemonick Anti Hangover Shot Lemon 60ml"}
            // medDetails={"10s Form-Powder"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med11}
            medName={"Armr Pro Immunity Shot Kadha 2.0 60ml"}
            // medDetails={"10s Form-Tab"}
            price={"12$"}
          />
          <ProdutsCarousel
            img={Med12}
            medName={"Armr Weight Management Shot With Apple Cider Vinegar 60ml"}
            // medDetails={"10s Form-Serum"}
            price={"12$"}
          />
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
};

export default EnergyDrinks;
