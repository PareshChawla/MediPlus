import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Dropdown from "./Dropdown"
import ProdutsCarousel from "./ProductsCoursel"
import Med1 from "../assets/images/G1.jpg";
import Med2 from "../assets/images/G2.jpg";
import Med3 from "../assets/images/G3.jpg";
import Med4 from "../assets/images/G4.jpg";
import Med5 from "../assets/images/G5.jpg";
import Med6 from "../assets/images/G6.jpg";
import Med7 from "../assets/images/G7.jpg";
import Med8 from "../assets/images/G8.jpg";
import Med9 from "../assets/images/G9.jpg";
import Med10 from "../assets/images/G10.jpg";
import Med11 from "../assets/images/G11.jpg";
import Med12 from "../assets/images/G12.jpeg";
import Med13 from "../assets/images/G13.jpg";
import Med14 from "../assets/images/G14.jpg";
import Med15 from "../assets/images/G15.jpg";
import Med16 from "../assets/images/G16.jpg";
import Med20 from "../assets/images/G20.png";
import Med21 from "../assets/images/G21.jpg";
import Med22 from "../assets/images/G22.jpg";
import Med23 from "../assets/images/G23.jpg";
import Med24 from "../assets/images/G24.jpg";
import Med25 from "../assets/images/G25.jpg";
import Med26 from "../assets/images/G26.jpg";
import Med27 from "../assets/images/G27.jpg";
import Med28 from "../assets/images/G28.jpg";
import Med29 from "../assets/images/G29.jpg";
import Med30 from "../assets/images/G30.jpg";
import Med31 from "../assets/images/G31.jpg";
import Med32 from "../assets/images/G32.jpg";
import Med33 from "../assets/images/G33.jpg";
import Med34 from "../assets/images/G34.jpg";
import Med35 from "../assets/images/G35.jpg";
import Med36 from "../assets/images/G36.jpg";




const imageSource =
  [
    {
      src: Med1,
      name: "A to Z Gold Cap",
      details: "10s Form-Tab",
      price: "12$"
    },
    {
      src:Med2,
      name: "A to Z NS Syp",
      details: "10s Form-Syrup",
      price: "12$"
    },
    {
      src:Med3,
      name: "A-Derma Gel Foaming 100ml",
      details: "10s Form-Gel",
      price: "12$"
    },
    {
      src:Med4,
      name: "Ab Flo Cap 10s",
      details: "10s Form-Capsule",
      price: "12$"
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
      price: "12$"
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
      price: "12$"
    },
    {
      src:Med10,
      name: "Abzorb Powder 100gm",
      details: "10s Form-Powder",
      price: "12$"
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
      price: "12$"
    },
    {
      src:Med13,
      name: "Accu Check Active",
      details: "Form-device",
      price: "12$"
    },
    {
      src:Med14,
      name: "Cipla Acivir Cream",
      details: "Form-cream",
      price: "12$"
    },
    {
      src:Med15,
      name: "Acne Aid Bar",
      details: "Form-Bar",
      price: "12$"
    },
    {
      src:Med16,
      name: "Acnelak soap",
      details: "Form-Soap",
      price: "12$"
    },
    {
      src:Med20,
      name: "Acnesol NC Gel 20gm",
      details: "10s Form-Tab",
      price: "12$"
    },
    {
      src:Med21,
      name: "Acnestar Soap 75gm",
      details: "10s Form-Syrup",
      price: "12$"
    },
    {
      src:Med22,
      name: "Acnonac Tab 10s",
      details: "10s Form-Gel",
      price: "12$"
    },
    {
      src:Med23,
      name: "Actibile Tab 300mg 10s",
      details: "10s Form-Capsule",
      price: "12$"
    },
    {
      src:Med24,
      name: "Actilife Tab 15s",
      details: "10s Form-Tab",
      price: "12$"
    },
    {
      src:Med25,
      name: "Acutrol C Tab 800mg 10s",
      details: "10s Form-Capsule",
      price: "12$"
    },
    {
      src:Med26,
      name: "Add Tears Eye Drop 10ml",
      details: "10s Form-Capsule",
      price: "12$"
    },
    {
      src:Med27,
      name: "Akt 4 Kit Tab 4s",
      details: "10s Form-Tab",
      price: "12$"
    },
    {
      src:Med28,
      name:"Alkasol Syp 100ml",
      details:"Form-Syrup",
      price:"12$"
    },
    {
      src:Med29,
      name:"All 9 Cap 10s",
      details:"Form-Capsule",
      price:"12$"
    },
    {
      src:Med30,
      name:"Alsamp Eye Drop 10ml",
      details:"From-Eye drop",
      price:"12$"
    },
    {
      src:Med31,
      name:"Amace BP Tab 10s",
      details:"Form-tablet",
      price:"12$"
    },
    {
      src:Med32,
      name:"Ambulax Tab 10s",
      details:"Form-Tablet",
      price:"12$"
    },
    {
      src:Med33,
      name:"Amdepin AT Tab 14s",
      details:"Form-Tablet",
      price:"12$"
    },
    {
      src:Med34,
      name:"Amdepin Tab 10mg 10s",
      details:"Form-Tablet",
      price:"12$"
    },
    {
      src:Med35,
      name:"Amifru Tab 40mg 10s",
      details:"Form-Tablet",
      price:"12$"
    },
    {
      src:Med36,
      name:"Ambrolite D Plus Syp 100ml",
      details:"Form-Tablet",
      price:"12$"
    },
  ]



const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(12);

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
        <h2 className=" text-white z-[2]">Our Products</h2>
      </section>
      <div className="container mx-auto p-40 md:flex-row">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Our Products</h1>
        <Dropdown/>
        <br/>
        <br/>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPost.map((product, index) => {
            return (
              <ProdutsCarousel
                key={index}
                img={product.src}
                medName={product.name}
                medDetails={product.details}
                price={"12$"}
              />
            )
          })}

        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
      </div>
    </>
  );
};

export default Products;
