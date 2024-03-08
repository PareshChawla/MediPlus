import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg8 from "../../../assets/images/blogimg8.png";
import blogimg_8 from "../../../assets/images/blogimg_8.jpg";

const health8 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            How to Determine Your Skin Type and What It Is?
          </header>
          <div className="flex flex-row mt-5">
            <Link to="/mediplusPharmacy">
              <div className=" rounded-full overflow-hidden bg-white w-9 h-9 mt-3">
                <img
                  className="rounded-full overflow-hidden bg-white object-contain w-full h-full"
                  src={medlogo}
                  alt="mediplus"
                />
              </div>
            </Link>
            &nbsp;&nbsp;
            <h2 className=" py-6 text-xs text-[#757c81] font-bold">
              <Link to="/mediplusPharmacy">MEDIPLUS PHARMACY</Link>
              &nbsp;/&nbsp;&nbsp;&nbsp;MARCH 6, 2024&nbsp;/&nbsp;&nbsp;&nbsp;
              <Link to="/health">HEALTH</Link>
            </h2>
          </div>
        </div>
      </section>

      <div className="mt-8 mx-auto max-w-4xl ">
        <div className="text-center ">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg8}
            alt="mediplus"
          />
        </div>
        <p className="mt-3">
          Understanding your skin's particular needs is the first step to having
          a healthy, beautiful complexion because your skin is as unique as you
          are. Knowing your skin type is essential to creating a customized
          skincare regimen that meets the unique needs of your skin. We'll
          discuss the various skin types in this blog and offer advice on how to
          recognize your own.
        </p>

        <p className="mt-3">
          <strong>Recognizing Typical Skin Types:</strong>
        </p>

        <ol>
          <li>
            <strong>Normal Skin:</strong> Skin that is in the middle of being
            too dry or too oily is balanced. Its complexion is healthy, its
            pores are minimal, and its texture is smooth.
          </li>
          <li>
            <strong>Oily Skin:</strong> Excess sebum production from oily skin
            often results in a glossy appearance. Common features include
            enlarged pores and a tendency toward blackheads and acne.
          </li>
          <li>
            <strong>Dry Skin:</strong> Skin that is devoid of moisture and has a
            tight or harsh texture. It may be prone to redness, small wrinkles,
            and flakiness.
          </li>
          <li>
            <strong>Combination Skin:</strong> A blend of many skin types makes
            up combination skin. People often have normal or dry cheeks and an
            oily T-zone (forehead, nose, and chin).
          </li>
          <li>
            <strong>Sensitive Skin:</strong> Redness, itching, and irritation
            are common with sensitive skin. Certain skincare products or
            environmental elements may cause it to react badly.
          </li>
        </ol>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_8}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4 mt-5">
          <b>How to Determine Your Skin Type: </b>
        </p>
        <p className="lg:leading-7 mb-4">
          After discussing the common skin kinds, let's talk about how to
          determine your own.
        </p>
        <p className="lg:leading-7 mb-4">
          Observe your skin's texture in the morning, midday, and evening. Does
          it seem tight and dry during the day, or does it get greasy as the day
          goes on?
        </p>
        <p className="mt-3">
          Look closely at your pore size, particularly in the T-zone. Smaller
          pores are typical of normal or dry skin, while larger pores may be an
          indication of oily skin.
        </p>
        <p className="mt-3">
          Touch your skin with your fingertips. Is it bumpy, rough, or smooth?
          Oily skin may feel slippery, and dry skin may feel scratchy.
        </p>
        <p className="mt-3">
          Observe your skin's response to various skincare products. Does it
          react well to specific ingredients, or does it get irritated easily?
        </p>
        <p className="mt-3">
          There are several things that can cause your skin to change with the
          seasons. Maintain a flexible schedule and make any adjustments.
        </p>
        <p className="mt-3">
          Knowing your skin type is essential to using skincare products that
          work. You can start on a skincare journey that nourishes and improves
          the inherent beauty of your skin by determining your specific needs.
          Spend some time analyzing, observing, and modifying your routine. It's
          an investment in your skin's vigor and health.
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

export default health8;
