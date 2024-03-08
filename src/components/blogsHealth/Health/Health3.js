import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg3 from "../../../assets/images/blogimg3.png";
import blogimg_3 from "../../../assets/images/blogimg_3.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";

const health3 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            How to Naturally Raise Your Platelet Count
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
            src={blogimg3}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Sustaining a healthy platelet count is critical for appropriate blood
          coagulation and general health. Although certain medical disorders
          might affect platelet counts, leading a healthy lifestyle and include
          certain foods in your diet can encourage your body to naturally
          produce more platelets. We'll look at a number of natural ways to
          raise your platelet count in this article.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Nutrient-Rich Diet: </b> Eating a well-balanced, nutrient-rich diet
          is essential for good health and helps raise platelet counts. Add a
          range of foods high in important nutrients, like vitamin B12, iron,
          vitamin K, and folate. Your diet should consist primarily of fruits,
          whole grains, lean meats, and leafy greens.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Papaya Leaf Extract: </b> Due to its ability to increase platelet
          count, papaya leaf extract has drawn interest. Although some research
          points to its efficacy, it's imperative to speak with a healthcare
          provider before taking any supplements.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Foods High in Vitamin C: </b> Vitamin C is well-known for
          strengthening the immune system and maybe promoting normal platelet
          function. Add bell peppers, broccoli, strawberries, and citrus fruits
          to your diet.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Zinc and pumpkin seeds: </b> Zinc may help produce platelets and is
          involved in immune system function. Include foods high in zinc, such
          as pumpkin seeds, in your diet.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Steer clear of Alcohol and Tobacco: </b> Smoking and excessive
          alcohol use might have a deleterious effect on the generation of
          platelets. Reducing or staying away from these substances can be good
          for your general health.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Remain Hydrated: </b> Sustaining optimum blood circulation requires
          adequate hydration. Make sure you stay hydrated throughout the day by
          drinking enough water.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 max-w-4xl"
            src={blogimg_3}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>Frequent Exercise: </b> Physical activity on a regular basis
          promotes general health and may help maintain normal blood
          circulation. Try to engage in exercises like cycling, walking, or
          jogging.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Handle Stress: </b> Prolonged stress can negatively impact the
          body's processes, including the production of platelets. Engage in
          stress-reduction practices including yoga, meditation, and deep
          breathing.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Sufficient Sleep: </b> Immune system and general health depend on
          good sleep. Make sure your body has enough sleep each night to aid in
          its natural healing processes.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Herbal Teas: </b> Green tea is one herbal tea that may have
          antioxidant qualities that are good for platelet health. See a medical
          expert before incorporating herbal supplements into your regimen.
        </p>
        <p className="lg:leading-7 mb-4">
          Changing your food and lifestyle to a more holistic one can naturally
          raise your platelet count. Even though these techniques could be
          helpful, you should always seek the assistance of a healthcare
          provider for specific guidance, particularly if you have underlying
          medical issues. You can support your body's natural processes and
          maintain a healthy platelet count by prioritizing your overall
          well-being and making informed decisions.
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

export default health3;
