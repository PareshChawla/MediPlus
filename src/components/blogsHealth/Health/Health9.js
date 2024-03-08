import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg9 from "../../../assets/images/blogimg9.png";
import blogimg_9 from "../../../assets/images/blogimg_9.jpg";

const health9 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            Six Items to Consume Daily to Promote Better Brain Health
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

      <div className="mt-5 mx-auto max-w-4xl ">
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg9}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Enhancing brain health is critical to general health and cognitive
          performance. You may improve the health of your brain by including
          specific foods in your diet on a regular basis. The general health of
          the brain depends on eating a varied, well-balanced diet. Keeping your
          body hydrated, exercising frequently, and mentally stimulating
          activities (such as solving puzzles or picking up new skills) all
          support the maintenance of cognitive function. It's critical to
          continue learning throughout life to preserve cognitive function. To
          keep your mind fresh and involved, take up new interests, go to
          workshops, or continue your education. Smoking and binge drinking can
          both have a negative impact on brain function. It is recommended to
          use these substances sparingly or not at all.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>
            The following six foods are ones you ought to think about including
            in your meals:
          </b>
        </p>
        <ul className="lg:leading-7 mb-4">
          <li>
            <b>Blueberries:</b> Rich in antioxidants, blueberries may enhance
            memory and shield the brain from oxidative stress.
          </li>
          <li>
            <b>Fatty Fish (like Salmon):</b> Packed with omega-3 fatty acids,
            fatty fish enhances memory, maintains brain function, and may even
            stave off cognitive decline.
          </li>
        </ul>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_9}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4 mt-5">
          <b>
            Health Benefits: Including soy chunks in your diet can have a number
            of positive effects on your health, such as:{" "}
          </b>
        </p>
        <p className="lg:leading-7 mb-4">
          Leafy greens, such as kale and spinach: Leafy greens, which are rich
          in antioxidants and vital nutrients like vitamin K, folate, and
          beta-carotene, may enhance memory and mental clarity while also
          slowing the aging process.
        </p>
        <p className="lg:leading-7 mb-4">
          Turmeric: Curcumin, the active component of turmeric, has antioxidant
          and anti-inflammatory properties that may enhance memory and brain
          health in general.
        </p>
        <p className="lg:leading-7 mb-4">
          Nuts and seeds: Packed with healthful fats, vitamin E, and
          antioxidants. They might aid in shielding the brain from inflammatory
          and oxidative stress.
        </p>
        <p className="lg:leading-7 mb-4">
          Whole Grains: These include Quinoa and Brown Rice. Whole grains, being
          high in fiber, complex carbs, and vital nutrients, offer the brain a
          consistent source of energy.
        </p>
        <p className="lg:leading-7 mb-4">
          Your mental health can benefit by engaging in joyful activities and
          keeping an optimistic view on life. It is essential to keep the brain
          healthy for general wellbeing and cognitive performance. Engaging in
          mindfulness exercises can enhance cognitive function overall, lower
          stress levels, and increase focus. Recall that each person's path to
          brain health is distinct. It's crucial to speak with a healthcare
          provider for specific guidance and to address any illnesses or worries
          you may have.
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

        <div className=" mt-5 py-10 flex items-center justify-center">
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

export default health9;
