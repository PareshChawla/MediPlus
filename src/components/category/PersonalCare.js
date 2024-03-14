import React, { useEffect, useState } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Dropdown from "../Dropdown";
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

const imageSource =
  [
    {
      src: Med1,
      name: "Faces Canada Lip Balm Orange Mint Vitamin C 4.5g",
      price: "10$",
    },
    {
      src: Med2,
      name: "Faces Canada Lip Color Balm Rose Petal Vitamin E 4.5g",
      price: "13$",
    },
    {
      src: Med3,
      name: "Faces Canada Liquid Sindoor 2.5ml",
      price: "14$",
    },
    {
      src: Med4,
      name: "Faces Canada Magnet Eyes Eyeliner Intense Black Dermatic Outlines 3.5ml",
      price: "8$",
    },
    {
      src: Med5,
      name: "Faces Canada Magnet Eyes Kajal 24 HR Water Proof With Almond Oil 0.35g",
      price: "18$",
    },
    {
      src: Med6,
      name: "Faces Canada Magnet Eyes Kajal+Eyeliner+Mascara 1s",
      price: "20$",
    },
    {
      src: Med7,
      name: "Faces Canada Magneteyes Dramatic Volumizing Mascara Dense Lashes Lightweight With Almond Oil 9.5ml",
      price: "15$",
    },
    {
      src: Med8,
      name: "Faces Canada Nail Enamel Ultime Pro Splash CC5838 8ml",
      price: "17$",
    },
    {
      src: Med9,
      name: "Faces Canada Nail Enamel Ultime Pro Splash CC5841 8ml",
      price: "10$",
    },
    {
      src: Med10,
      name: "Faces Canada Nail Enamel Ultime Pro Splash CC5847 8ml",
      price: "9$",
    },
    {
      src: Med11,
      name: "Faces Canada Nail Enamel Ultime Pro Splash CC5867 8ml",
      price: "11$",
    },
    {
      src: Med12,
      name: "Faces Canada Nail Enamel Ultime Pro Splash CC5874 8ml",
      price: "6$",
    },
  ]

const PersonalCare = () => {
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
  } else {

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
        <h2 className=" text-white z-[2]">PersonalCare</h2>
      </section>
      <div className="container mx-auto p-40 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Health Supplements</h1> */}
        <Dropdown handleSortChange={handleSortChange} />
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPost.map((personalCare, index) => {
            return (
              <ProdutsCarousel
                key={index}
                img={personalCare.src}
                medName={personalCare.name}
                // medDetails={"10s Form-Syrup"}
                price={personalCare.price}
              />
            )
          })}

        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
};

export default PersonalCare;