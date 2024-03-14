import React, { useEffect, useState } from "react";
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
// import Pagination from "../Pagination";

const imageSource = 
[
  {
    src: Med1,
    name: "Armr Anti Hangover Shot Apple 60ml",
    price: "12",
  },
  {
    src: Med2,
    name: "Armr Anti Hangover Shot Blackberry 60ml",
    price: "4",
  },
  {
    src: Med3,
    name: "Armr Daily Detox Shot With Activated Charcoal 60ml",
    price: "24",
  },
  {
    src: Med4,
    name: "Armr Lemonick Anti Hangover Shot Lemon 60ml",
    price: "32",
  },
  {
    src: Med5,
    name: "Armr Pro Immunity Shot Kadha 2.0 60ml",
    price: "15",
  },
  {
    src: Med6,
    name: "Armr Weight Management Shot With Apple Cider Vinegar 60ml",
    price: "18",
  },
  {
    src: Med7,
    name: "Armr Anti Hangover Shot Apple 60ml",
    price: "24",
  },
  {
    src: Med8,
    name: "Armr Anti Hangover Shot Blackberry 60ml",
    price: "67",
  },
  {
    src: Med9,
    name: "Armr Daily Detox Shot With Activated Charcoal 60ml",
    price: "15",
  },
  {
    src: Med10,
    name: "Armr Lemonick Anti Hangover Shot Lemon 60ml",
    price: "8",
  },
  {
    src: Med11,
    name: "Armr Pro Immunity Shot Kadha 2.0 60ml",
    price: "11",
  },
  {
    src: Med12,
    name: "Armr Weight Management Shot With Apple Cider Vinegar 60ml",
    price: "7",
  },
]

const EnergyDrinks = () => {
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
  } else{
    
  }

  let pages = [];

  for (let i = 1; i <= Math.ceil(imageSource?.length / postsPerPage); i++) {
    pages.push(i);
  }
  const lastPostIndex = postsPerPage * currentPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = imageSource?.slice(firstPostIndex, lastPostIndex)
  console.log(currentPage)
  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/medicine2.webp)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">EnergyDrinks</h2>
      </section>
      
      <div className="container mx-auto p-40 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Health Supplements</h1> */}
        <Dropdown handleSortChange={handleSortChange}/>
      <br/>
      <br/>
      <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentPost.map((energyDrink, index) => {
          return (
            <ProdutsCarousel
            key={index}
            img={energyDrink.src}
            medName={energyDrink.name}
            // medDetails={"10s Form-Tab"}
            price={energyDrink.price}
          />
          )
        })}

        </div>
        {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} /> */}
      </div>
    </>
  );
};

export default EnergyDrinks;
