import React, { useState } from "react";
import Med1 from "../assets/images/f1.jpg";
import Med2 from "../assets/images/f2.jpg";
import Med3 from "../assets/images/f3.jpg";
import Med4 from "../assets/images/f4.jpg";
import Med5 from "../assets/images/f5.jpg";
import Med6 from "../assets/images/f6.jpg";
import HomeFeaturedp from './HomeFeaturedp.js';


const imageSource =
    [
        {
            src: Med1,
            name: "Renee Dark Desire Eau De Parfum 50ml",
            rating: 3,


        },
        {
            src: Med2,
            name: "Renee Oud Aspire Eau De Parfum 50ml",
            rating: 2,

        },
        {
            src: Med3,
            name: "Renee Bloom Eau De Parfum 50ml",
            rating: 3,

        },
        {
            src: Med4,
            name: "Renee Kajal Pen Hard Black (2X.35g) 1s",
            rating: 4,

        },
        {
            src: Med5,
            name: "Renee Fab 5 Nude 5 In 1 Lipstick 7.5gm",
            rating: 5,
            

        },
        {
            src: Med6,
            name: "Renee Fab 5 Poppy 5 In 1 Lipstick 7.5gm",
            rating: 4,

        }]

const FeaturedProducts = () => {

    const [currentPost] = useState(imageSource);

    return (
        <>

            <div className="text-center mx-2 mb-16 bg-[#FBFCFC] mt-10">
                <h1 className="text-4xl text-[#3470a1] font-bold">
                    Featured Products

                </h1>
                <div className="border-t-2 border-[#3470a1] w-[8%] ml-[46%] mt-7 "></div>
            </div>
            <div className="  md:flex md:flex-row flex-col  ">
                {currentPost.map((product, index) => {
                    return (
                        <div key={index} className="md:w-1/3 p-4">
                            <HomeFeaturedp
                                img={product.src}
                                medName={product.name}
                                rating={product.rating}//rating={index === 0 ? product.rating : undefined} // Render rating only for the first product
                            />
                        </div>

                    )
                })}

            </div>

        </>
    );
};

export default FeaturedProducts;
