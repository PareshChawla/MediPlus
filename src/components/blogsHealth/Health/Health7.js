import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg7 from "../../../assets/images/blogimg7.png";
import blogimg_7 from "../../../assets/images/blogimg_7.jpg";

const health7 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            Five Natural Ways to Treat Dry Skin in the Winter
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

      <div className="mt-11 mx-auto max-w-4xl ">
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg7}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Many of us struggle with dry skin, an unwanted companion as the winter
          frost sets in. Intense heat, dry air, and strong winds can deplete the
          skin's natural moisture content, leaving it tight, flaking, and
          painful. Even if the market is flooded with skincare products, your
          kitchen cupboard may hold the answer to your winter skin problems.
          Let's look at five efficient DIY solutions that will help you achieve
          a dewy, glowing skin in the winter.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Olive Oil Magic:</b> A mainstay in many kitchens, olive oil does
          wonders for dry skin. Rich in healthy fats and antioxidants, it works
          wonders as a natural moisturizer. Apply a tiny bit of extra virgin
          olive oil to your hands, face, and any other dry areas before going to
          bed. Overnight use will result in softer, more supple skin when you
          wake up.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Honey Healing:</b> Honey is a natural humectant, which means that
          it draws and holds moisture, in addition to being a delicious delight.
          Apply a tiny coating of raw honey to your face to make a homemade
          honey mask. After letting it sit for ten to fifteen minutes, rinse it
          with warm water. What was the outcome? plumped up and well-fed skin.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Avocado Avil:</b> Avocado is a great cure for dry skin in addition
          to being a popular toast topping. Mash half of an avocado and stir in
          one tsp honey. Apply and let this creamy mixture sit on your face for
          approximately fifteen minutes. Rich in vitamins and good fats,
          avocados can help your skin seem younger and more refreshed.
        </p>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_7}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4 mt-5">
          <b>Milk Moisture:</b> A relaxing and mild treatment for dry skin is
          milk. Take a relaxing soak in the bathtub after adding several cups of
          whole milk to the water. While the natural fats in milk hydrate your
          skin, the lactic acid in it exfoliates dead skin cells. Soak a
          washcloth in cold milk and apply it to your face for ten to fifteen
          minutes as a quick treatment.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Coconut Oil Elixir: </b> Because of its moisturizing qualities,
          coconut oil is a multipurpose treatment for dry skin. Apply coconut
          oil to damp skin right after a warm shower, when your pores are still
          open. Your skin will stay moisturized all day long since it will seal
          in the moisture. For general skin health, you can also include coconut
          oil in your diet.
        </p>
        <p className="lg:leading-7 mb-4">
          Don't let your winter sparkle fade due to dry skin. Accept the ability
          of natural cures to hydrate and shield your skin in the chilly months.
          These natural cures for dry skin include several benefits, such as the
          richness of olive oil, the tenderness of milk, the creaminess of
          avocado, the sweetness of honey, and the adaptability of coconut oil.
          Bid farewell to wintertime miseries and welcome to a glowing, dewy
          complexion.
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
            <div class="mb-4 flex-grow mr-4 ">
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

export default health7;
