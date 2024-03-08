import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg1 from "../../../assets/images/blogimg1.jpg";
import blogimg_1 from "../../../assets/images/blogimg_1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";

const health1 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            Soya Chunks' Nutritional Values and Health Benefits
          </header>
          <div className="flex flex-row mt-5">
            <Link to="/mediplusPharmacy">
              <div className="rounded-full overflow-hidden bg-white w-9 h-9 mt-3">
                <img
                  className="rounded-full overflow-hidden bg-white object-contain w-full h-full"
                  src={medlogo}
                  alt="mediplus"
                />
              </div>
            </Link>
            &nbsp;&nbsp;
            <h2 className="py-6 text-xs text-[#757c81] font-bold">
              <Link to="/mediplusPharmacy">MEDIPLUS PHARMACY</Link>
              &nbsp;/&nbsp;&nbsp;&nbsp;MARCH 6, 2024&nbsp;/&nbsp;&nbsp;&nbsp;
              <Link to="/health">HEALTH</Link>
            </h2>
          </div>
        </div>
      </section>

      <div className="mt-11 mx-auto border max-w-4xl ">
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5"
            src={blogimg1}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Soya chunks are widely known for having a high nutritional content,
          which makes them a great way to get the important nutrients you need
          to stay healthy and happy overall. Let's examine in more detail the
          nutritional qualities and health advantages that make soy chunks an
          excellent supplement to any diet. This is a summary of the soya
          chunks' nutritional makeup.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Powerhouse of Nutrition: :</b> Vegetarians and vegans find soy
          chunks to be a great source of protein due to their high protein
          level. About 52 grams of protein, or the same amount as meat, may be
          obtained from only one cup of cooked soy pieces. They are therefore a
          great choice for anyone trying to get the necessary amount of protein
          for bodily function, muscular growth, and repair.
        </p>
        <p className="lg:leading-7 mb-4">
          Soya chunks, being high in dietary fiber, have the potential to
          enhance both intestinal health and digestion. In addition to
          preventing constipation and promoting a fullness sensation, fiber also
          helps control and regulate bowel motions, which can help with weight
          management.
        </p>
        <p className="lg:leading-7 mb-4">
          Chunks of soya are a great source of iron, calcium, magnesium,
          phosphorus, potassium, vitamin B6, and vitamin K, among other
          important vitamins and minerals. Numerous biological processes,
          including energy metabolism, immune system function, bone health, and
          oxygen transport, depend critically on these nutrients.
        </p>
        <p className="lg:leading-7 mb-4">
          Soya chunks are high in protein and other nutrients, but they are low
          in fat, especially saturated fat. This makes them a heart-healthy food
          choice, and when included in a balanced diet, they can assist people
          in maintaining healthy cholesterol levels.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 max-w-4xl"
            src={blogimg_1}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>
            Health Benefits: Including soy chunks in your diet can have a number
            of positive effects on your health, such as:{" "}
          </b>
        </p>
        <p className="lg:leading-7 mb-4">
          Because soya chunks are high in protein and low in saturated fat, they
          can help lower LDL (bad) cholesterol levels and lower the risk of
          cardiovascular disorders like heart attacks and strokes.
        </p>
        <p className="lg:leading-7 mb-4">
          Calcium and vitamin K are necessary for strong, healthy bones, and soy
          chunks are a rich source of both. Soya chunks can help prevent
          bone-related problems including osteoporosis and fractures when
          consumed on a regular basis, especially for postmenopausal women.
        </p>
        <p className="lg:leading-7 mb-4">
          Soya chunks' high protein and fiber content encourages satiety and
          lowers total calorie consumption, which can help with weight
          management. Soy chunks can be added to meals to help people feel
          satisfied for longer, which lowers the chance of overeating and
          supports efforts to lose or maintain weight.
        </p>
        <p className="lg:leading-7 mb-4">
          Because soya chunks are high in fiber, they can help control blood
          sugar levels, which makes them a good addition to any diet for people
          who already have diabetes or are at risk of getting it. Soya chunks
          can improve glycemic management by reducing blood sugar spikes and
          crashes by delaying the absorption of glucose into the system.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>In summary: </b>
        </p>
        <p className="lg:leading-7">
          Chunks of soya are a nutritional powerhouse, providing a wide range of
          vital nutrients and health benefits. Soya chunks can be a smart
          addition to your diet if you want to increase your protein intake,
          promote heart health, control your weight, or just have tasty and
          nourishing meals. Soya chunks have justifiably earned their spot as a
          fundamental ingredient in the pursuit of a better lifestyle because to
          their adaptability and abundance of culinary possibilities.
        </p>
        <div className=" mt-5 py-8 flex items-center justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900 border border-gray-300 flex justify-center items-center w-60 h-14"
          >
            <BiLogoFacebookCircle size={18} className="cursor-pointer" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900 border border-gray-300 flex justify-center items-center w-60 h-14 "
          >
            <FaSquareXTwitter size={18} className="cursor-pointer" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900 border border-gray-300 flex justify-center items-center w-60 h-14 "
          >
            <BiLogoPinterest size={18} className="cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900 border border-gray-300 flex justify-center items-center w-60 h-14 "
          >
            <BiLogoLinkedinSquare size={18} className="cursor-pointer" />
          </a>
        </div>

        <div className="py-20">
          <h2 class="text-lg font-semibold text-[#3470a1] mb-2">
            Leave a Reply
          </h2>

          <form class="flex flex-wrap">
            <div class="mb-4 flex-grow mr-4">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name<span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>

            <div class="mb-4 flex-grow mr-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email<span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div class="mb-4 flex-grow mr-4">
              <label
                for="Website"
                class="block text-sm font-medium text-gray-700"
              >
                Website<span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="website"
                name="website"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
          </form>

          <div class="flex items-center mb-4 py-2">
            <input type="checkbox" id="publish" name="publish" class="mr-2" />
            <label for="publish" class="text-sm text-gray-700">
              Your email address will not be published. Required fields are
              marked *
            </label>
          </div>

          <div class="mb-4 flex-grow">
            <label
              for="comment"
              class="block text-sm font-medium text-gray-700"
            >
              Add Comments
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="3"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[500px] shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 font-medium rounded-md text-white bg-green-500 hover:bg-blue-500  "
          >
            Post Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default health1;
