import React, {useEffect, useState} from 'react';
import Pagination from '../Pagination';
import ProductsCoursel from '../ProductsCoursel';
import Med1 from "../../assets/images/babyCareImg/A1.jpeg";
import Med2 from "../../assets/images/babyCareImg/A2.jpg";
import Med3 from "../../assets/images/babyCareImg/A3.jpg";
import Med4 from "../../assets/images/babyCareImg/A4.jpg";
import Med5 from "../../assets/images/babyCareImg/A5.jpg";
import Med6 from "../../assets/images/babyCareImg/A6.jpg";
import Med7 from "../../assets/images/babyCareImg/A7.webp";
import Med8 from "../../assets/images/babyCareImg/A8.webp";
import Med9 from "../../assets/images/babyCareImg/A9.jpg";
import Med10 from "../../assets/images/babyCareImg/A10.jpg";
import Med11 from "../../assets/images/babyCareImg/A11.webp";
import Med12 from "../../assets/images/babyCareImg/A12.jpg";
import Med13 from "../../assets/images/babyCareImg/A13.jpg";
import Med14 from "../../assets/images/babyCareImg/A14.webp";
import Med15 from "../../assets/images/babyCareImg/A15.jpg";
import Med16 from "../../assets/images/babyCareImg/A16.jpg";
import Med17 from "../../assets/images/babyCareImg/A17.jpg";
import Med18 from "../../assets/images/babyCareImg/A18.jpg";
import Med19 from "../../assets/images/babyCareImg/A19.jpg";
import Med20 from "../../assets/images/babyCareImg/A20.jpeg";
import Med21 from "../../assets/images/babyCareImg/A21.jpeg";



const imageSource = 
[
  {
    src: Med1,
    name: "Bonne Nipples",
    price: "12$"
  },
  {
    src: Med2,
    name: "Cerelac Stage 1 Cereal BIB Rice 300gm",
    price: "12$"
  },
  {
    src: Med3,
    name: "Cerelac Stage 1 Cereal Wheat Apple Ref 300gm",
    price: "12$"
  },
  {
    src: Med4,
    name: "Cerelac Stage 1 Powder BIB Wheat Apple 300gm",
    price: "12$"
  },
  {
    src: Med5,
    name: "Cerelac Stage 1 Powder Wheat 300gm",
    price: "12$"
  },
  {
    src: Med6,
    name: "Cerelac Stage 1 Powder Wheat Apple Carrot 300gm",
    price: "12$"
  },
  {
    src: Med7,
    name: "Cerelac Stage 1 Powder Wheat Apple Cherry Ref 300gm",
    price: "12$"
  },
  {
    src: Med8,
    name: "Cerelac Stage 2 Cereal BIB Rice Veg 300gm",
    price: "12$"
  },
  {
    src: Med9,
    name: "Cerelac Stage 2 Cereal Wheat Orange 300gm",
    price: "12$"
  },
  {
    src: Med10,
    name: "Cerelac Stage 2 Powder Wheat Apple Chry 300gm",
    price: "12$"
  },
  {
    src: Med11,
    name: "Cerelac Stage 3 Cereal 4m/grn Dalveg 300gm",
    price: "12$"
  },
  {
    src: Med12,
    name: "Cerelac Stage 3 Cereal BIB Wheat Honey Dates 300gm",
    price: "12$"
  },
  {
    src: Med13,
    name: "Cerelac Stage 3 Cereal Wheat Rice Mixed Fruit 300gm",
    price: "12$"
  },
  {
    src: Med14,
    name: "Chicco Baby Bath Foaming 500ml",
    price: "12$"
  },
  {
    src: Med15,
    name: "Chicco Baby Moments Gift Pack Blue 0M+ 1s",
    price: "12$"
  },
  {
    src: Med16,
    name: "Chicco Baby Soap Tri Pack 100gm",
    price: "12$"
  },
  {
    src: Med17,
    name: "Chicco Baby Soap Moment",
    price: "12$"
  },
  {
    src: Med18,
    name: "Cerelac Stage 5 Powder 5Grains & Fruits 300gm",
    price: "12$"
  },
  {
    src: Med19,
    name: "Chicco Baby Soft Cleansing Wipes 20pc",
    price: "12$"
  },
  {
    src: Med20,
    name: "Chicco Baby Wipes Cleansing 72pc",
    price: "12$"
  },
  {
    src: Med21,
    name: "Chicco Baby Wipes Cleansing Flip 72pc",
    price: "12$"
  },
  {
    src: Med12,
    name: "Cerelac Stage 3 Cereal BIB Wheat Honey Dates 300gm",
    price: "12$"
  },
  {
    src: Med13,
    name: "Cerelac Stage 3 Cereal Wheat Rice Mixed Fruit 300gm",
    price: "12$"
  },
  {
    src: Med14,
    name: "Chicco Baby Bath Foaming 500ml",
    price: "12$"
  },
  {
    src: Med15,
    name: "Chicco Baby Moments Gift Pack Blue 0M+ 1s",
    price: "12$"
  },
  {
    src: Med16,
    name: "Chicco Baby Soap Tri Pack 100gm",
    price: "12$"
  },
  {
    src: Med17,
    name: "Chicco Baby Soap Moment",
    price: "12$"
  },
  {
    src: Med18,
    name: "Cerelac Stage 5 Powder 5Grains & Fruits 300gm",
    price: "12$"
  },
  {
    src: Med7,
    name: "Cerelac Stage 1 Powder Wheat Apple Cherry Ref 300gm",
    price: "12$"
  },
  {
    src: Med8,
    name: "Cerelac Stage 2 Cereal BIB Rice Veg 300gm",
    price: "12$"
  },
  {
    src: Med9,
    name: "Cerelac Stage 2 Cereal Wheat Orange 300gm",
    price: "12$"
  },
  {
    src: Med10,
    name: "Cerelac Stage 2 Powder Wheat Apple Chry 300gm",
    price: "12$"
  },
  {
    src: Med11,
    name: "Cerelac Stage 3 Cereal 4m/grn Dalveg 300gm",
    price: "12$"
  },
  {
    src: Med12,
    name: "Cerelac Stage 3 Cereal BIB Wheat Honey Dates 300gm",
    price: "12$"
  },
  {
    src: Med13,
    name: "Cerelac Stage 3 Cereal Wheat Rice Mixed Fruit 300gm",
    price: "12$"
  },
  {
    src: Med14,
    name: "Chicco Baby Bath Foaming 500ml",
    price: "12$"
  },
  {
    src: Med15,
    name: "Chicco Baby Moments Gift Pack Blue 0M+ 1s",
    price: "12$"
  },
  {
    src: Med16,
    name: "Chicco Baby Soap Tri Pack 100gm",
    price: "12$"
  },
]

const BabyCare2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(24);

  let pages = [];

  for (let i = 1; i <= Math.ceil(imageSource?.length / postsPerPage); i++) {
    pages.push(i);
  }
  const lastPostIndex = postsPerPage * currentPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = imageSource?.slice(firstPostIndex, lastPostIndex)
  console.log(currentPage)

  return (
    <div>
    <section className="relative grid place-items-center h-96 uppercase mb-20 text-5xl font-bold bg-[url(/src/assets/images/blog_img.jpg)]">
        <h2 className=" text-[#3470a1] z-[2]">Baby Care</h2>
      </section>
        <div className="container mx-auto p-8 md:flex-row">
        {/* <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Health Supplements</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {currentPost.map((babyCare, index) => {
            return (
              <ProductsCoursel
                key={index}
                img={babyCare.src}
                medName={babyCare.name}
                // medDetails={babyCare.details}
                price={"12$"}
              />
            )
          })}
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
        </div>
    </div>
  )
}

export default BabyCare2