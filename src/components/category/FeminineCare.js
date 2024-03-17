import React, { useEffect, useState } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Dropdown from "../Dropdown";
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

const imageSource =[
  {
    src:Med1,
    name:"Carmesi Disposable Period Panties M-L (1×4) 1s",
    price: "10$",
  },
  {
    src:Med2,
    name:"Carmesi Facial Razor For Women (1×3) 1s",
    price: "12$",
  },
  {
    src:Med3,
    name:"Carmesi Panty Liners (1×60) 1s",
    price: "6$",
  },
  {
    src:Med4,
    name:"Carmesi Sensitive Sanitary Pads Rash Free (1×10) 1s",
    price: "8$",
  },
  {
    src:Med5,
    name:"Good Vibes Brightening Face Serum Vitamin C 30ml",
    price: "15$",
  },
  {
    src:Med6,
    name:"Hi Life Intimate Hygiene Spray (480 Spray) 60ml",
    price: "9$",
  },
  {
    src:Med7,
    name:"Hi Life Silica Drops 1200 Drops 60ml",
    price: "11$",
  },
  {
    src:Med8,
    name:"Hi Life Organic Periods Pads (1X10) 1s",
    price: "13$",
  },
  {
    src:Med9,
    name:"Hi Life Organic Panty Liners With Wings (1X24) 1s",
    price: "18$",
  },
  {
    src:Med10,
    name:"Hi Life Organic Period Pads (1×8) 1s",
    price: "17$",
  },
  {
    src:Med11,
    name:"Sofy Bodyfit Pads 16s",
    price: "20$",
  },
  {
    src:Med12,
    name:"Sofy Bodyfit Pads Anti Bacteria XL",
    price: "30$",
  },
]

const FeminineCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [selectedOption, setSelectedOption] = useState("Default sorting");

  const handleSortChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };


  if (selectedOption === "Sort by price: low to high") {
    imageSource.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (selectedOption === "Sort by price: high to low") {
    imageSource.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (selectedOption === "Default sorting") {
  }

  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = imageSource?.slice(firstPostIndex, lastPostIndex);


  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/medicine2.webp)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className="text-white z-[2]">Feminine Care</h2>
      </section>
      <div className="container mx-auto p-6 md:p-12 lg:p-20">
      <Dropdown handleSortChange={handleSortChange}/>
        <br/>
        <br/>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {currentPost.map((feminineCare, index) => (
            <ProdutsCarousel
              key={index}
              img={feminineCare.src}
              medName={feminineCare.name}
              price={feminineCare.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeminineCare;
