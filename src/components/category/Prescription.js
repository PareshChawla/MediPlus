import React, { useEffect, useState } from "react";
import ProdutsCarousel from "../ProductsCoursel";
import Dropdown from "../Dropdown";
import Med1 from "../../assets/images/G1.jpg";
import Med2 from "../../assets/images/G2.jpg";
import Med3 from "../../assets/images/G3.jpg";
import Med4 from "../../assets/images/G4.jpg";
import Med5 from "../../assets/images/G5.jpg";
import Med6 from "../../assets/images/G6.jpg";
import Med7 from "../../assets/images/G7.jpg";
import Med8 from "../../assets/images/G8.jpg";
import Med9 from "../../assets/images/G9.jpg";
import Med10 from "../../assets/images/G10.jpg";
import Med11 from "../../assets/images/G11.jpg";
import Med12 from "../../assets/images/G12.jpeg";

const imageSource =
  [
    {
      src: Med1,
      name: "A to Z Gold Cap",
      details: "10s Form-Tab",
      price: "1$"
    },
    {
      src:Med2,
      name: "A to Z NS Syp",
      details: "10s Form-Syrup",
      price: "4$"
    },
    {
      src:Med3,
      name: "A-Derma Gel Foaming 100ml",
      details: "10s Form-Gel",
      price: "13$"
    },
    {
      src:Med4,
      name: "Ab Flo Cap 10s",
      details: "10s Form-Capsule",
      price: "5$"
    },
    {
      src:Med5,
      name: "Ab Flo SR Tab 200mg 10s",
      details: "10s Form-Tab",
      price: "12$"
    },
    {
      src:Med6,
      name: "Ab Phylline Cap 10s",
      details: "10s Form-Capsule",
      price: "34$"
    },
    {
      src:Med7,
      name: "Above 5 D Cap 6s",
      details: "10s Form-Capsule",
      price: "12$"
    },
    {
      src:Med8,
      name: "A to Z NS Syp",
      details: "10s Form-Syrup",
      price: "12$"
    },
    {
      src:Med9,
      name: "Absolut Cap 10s",
      details: "10s Form-Capsule",
      price: "24$"
    },
    {
      src:Med10,
      name: "Abzorb Powder 100gm",
      details: "10s Form-Powder",
      price: "19$"
    },
    {
      src:Med11,
      name: "Acamprol Tab 6s",
      details: "10s Form-Tab",
      price: "12$"
    },
    {
      src:Med12,
      name: "Acglicolic Liposomal Serum 30ml",
      details: "10s Form-Serum",
      price: "39$"
    }
  ]

const Prescription = () => {
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
  }

  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = imageSource?.slice(firstPostIndex, lastPostIndex);


  return (
    <>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50"></div>
        <h2 className="text-white z-[2]">Prescription</h2>
      </section>
      <div className="container mx-auto p-6 md:p-12 lg:p-20">
      <Dropdown handleSortChange={handleSortChange}/>
        <br/>
        <br/>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {currentPost.map((prescription, index) => (
            <ProdutsCarousel
              key={index}
              img={prescription.src}
              medName={prescription.name}
              price={prescription.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Prescription;
