import React, { useEffect, useState } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Dropdown from "../Dropdown";
import Med1 from "../../assets/images/healthcaredevicesimg/hd1.jpg";
import Med2 from "../../assets/images/healthcaredevicesimg/hd2.jpg";
import Med3 from "../../assets/images/healthcaredevicesimg/hd3.jpg";
import Med4 from "../../assets/images/healthcaredevicesimg/hd4.jpg";

const imageSource = [
  {
    src:Med1,
    name:"Genetic Nutrition Bio Whey Powder Chocolate 1Kg",
    price: "12$",
  },
  {
    src:Med2,
    name:"Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
    price: "20$",
  },
  {
    src:Med3,
    name:"Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s",
    price: "10$",
  },
  {
    src:Med4,
    name:"Genetic Nutrition Cap CLA (1×60) 1s",
    price: "8$",
  },
]

const HealthcareDevices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, /*setCurrentPage*/] = useState(1);
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
  }

  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = imageSource?.slice(firstPostIndex, lastPostIndex);


  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 "></div>
        <h2 className="text-[#3470A1] z-[2] text-center">Healthcare Devices</h2>
      </section>
      <div className="container mx-auto p-6 md:p-12 lg:p-20">
      <Dropdown handleSortChange={handleSortChange}/>
        <br/>
        <br/>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {currentPost.map((healthcareDevices, index) => (
            <ProdutsCarousel
              key={index}
              img={healthcareDevices.src}
              medName={healthcareDevices.name}
              price={healthcareDevices.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HealthcareDevices;
