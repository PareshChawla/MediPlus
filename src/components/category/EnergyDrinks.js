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

const imageSource = [
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
];

const EnergyDrinks = () => {
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
        <div className="absolute top-0 left-0 w-full h-full opacity-50"></div>
        <h2 className="text-white z-[2]">EnergyDrinks</h2>
      </section>
      
      <div className="container mx-auto p-6 md:p-12 lg:p-20 md:flex-row">
        <Dropdown handleSortChange={handleSortChange}/>
        <br/>
        <br/>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPost.map((energyDrink, index) => (
            <ProdutsCarousel
              key={index}
              img={energyDrink.src}
              medName={energyDrink.name}
              price={energyDrink.price}
            />
          ))}
        </div>
        {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} /> */}
      </div>
    </>
  );
};

export default EnergyDrinks;
