import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg5 from "../../../assets/images/blogimg5.png";
import blogimg_5 from "../../../assets/images/blogimg_5.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
const health5 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            How Can Wintertime Hair Loss Be Prevented?
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
              &nbsp;/&nbsp;&nbsp;&nbsp;FEBRUARY 9, 2024&nbsp;/&nbsp;&nbsp;&nbsp;
              <Link to="/health">HEALTH</Link>
            </h2>
          </div>
        </div>
      </section>

      <div className="mt-11 mx-auto  max-w-4xl ">
        <div className="text-center">
          <img
            className="mx-auto w-full  bg-white object-contain mt-2"
            src={blogimg5}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Wintertime hair loss can be caused by a number of things, such as dry,
          cold weather, dehydration, and other environmental variables. Many of
          us have to cope with an unwanted companion as winter approaches: more
          hair falling out. Our locks may suffer from the dry, cold weather,
          which increases their susceptibility to breaking and shedding. But you
          can maintain the condition of your hair and avoid significant winter
          hair loss by making a few small changes to your hair care regimen.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Deep Conditioning: </b> The dry, brittle air of winter tends to rob
          your hair of its hydration. Invest on a quality deep conditioning
          treatment to offset this. To hydrate and nourish your hair, use a
          conditioning treatment or hair mask once a week at the very least. For
          extra hydration, look for hair fall products that contain components
          like argan oil, shea butter, or coconut oil.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Restrict the Amount of Hot Water Showers: </b> Although a warm
          shower could be soothing in the winter, it can be damaging to your
          hair. Your scalp's natural oils can be removed by hot water, which can
          cause dryness and an increase in hair loss. In order to seal the
          cuticles in your hair and add shine , use lukewarm water instead of
          running a cold rinse after your shower.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 max-w-4xl"
            src={blogimg_5}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>Protect Your Hair from the Elements: </b> To protect your hair from
          the dry air and chilly weather, wrap it in a scarf or cap. This
          shields your hair from environmental damage and aids in preventing
          moisture loss. Think carefully about the materials you use; to
          minimize static electricity and reduce friction, pick hats lined with
          satin or made of silk.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Regular Trims: </b> Arrange for routine trims to remove split ends
          and stop them from growing and causing further damage to the hair
          shaft. This not only keeps your hair looking nice and tidy, but it
          also helps keep it healthy.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Balanced nutrition: </b> Keeping your nutrition in check is
          essential to having healthy hair. Make sure you're getting enough
          vitamins and minerals, especially the ones that are proven to support
          healthy hair, like biotin, vitamin E, and omega-3 fatty acids.
          Incorporate into your diet items such as leafy greens, salmon, nuts,
          and seeds.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Scalp Massage: </b> Say goodbye to excessive hair fall and embrace
          healthy, luscious locks throughout the winter with a few simple tweaks
          to your hair care regimen. To keep your hair nourished, hydrated, and
          protected during the winter, remember to do these things to the
          outside of your hair as well.
        </p>
        <p className="lg:leading-7 mb-4">
          Wintertime hair loss can be caused by a number of things, such as dry,
          cold weather, dehydration, and other environmental variables. Many of
          us have to cope with an unwanted companion as winter approaches: more
          hair falling out. Our locks may suffer from the dry, cold weather,
          which increases their susceptibility to breaking and shedding. But you
          can maintain the condition of your hair and avoid significant winter
          hair loss by making a few small changes to your hair care regimen.
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

export default health5;
