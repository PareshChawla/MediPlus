import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg10 from "../../../assets/images/blogimg10.png";
import blogimg_10 from "../../../assets/images/blogimg_10.jpg";

const health10 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            How to Reduce Skin Inflammation Naturally
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
            src={blogimg10}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          To make sure you don't have an allergic reaction, always remember to
          do a patch test before taking any of these treatments. Seek more
          guidance and treatment alternatives from a healthcare provider if your
          skin condition gets worse or continues.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>
            The following natural treatments could be able to reduce skin
            inflammation:
          </b>
        </p>
        <ul className="lg:leading-7 mb-4">
          <li>
            <b>Aloe Vera Gel:</b> Aloe vera contains calming and
            anti-inflammatory qualities. Directly apply pure aloe vera gel to
            the injured area.
          </li>
          <li>
            <b>Cold Compress:</b> Using a cold compress can help calm inflamed
            skin and lessen inflammation. Ice cubes should be wrapped in a fresh
            cloth and applied gently to the injured area.
          </li>
          <li>
            <b>Oatmeal Bath:</b> Compounds in colloidal oatmeal help soothe
            inflamed skin. To a warm bath, add finely ground oatmeal and soak
            for fifteen to twenty minutes.
          </li>
          <li>
            <b>Tea made with chamomile:</b> Chamomile contains anti-inflammatory
            qualities. Strong chamomile tea should be brewed, allowed to cool,
            and then applied with a clean cloth to the afflicted area.
          </li>
        </ul>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_10}
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
          Coconut Oil: Coconut oil contains anti-inflammatory and hydrating
          qualities. On the afflicted area, apply a thin coating of pure coconut
          oil.
        </p>
        <p className="lg:leading-7 mb-4">
          Honey: Honey contains anti-inflammatory and antibacterial qualities.
          On the afflicted region, apply a thin layer of raw, organic honey. Let
          it sit for ten to fifteen minutes before rinsing.
        </p>
        <p className="lg:leading-7 mb-4">
          Turmeric Paste: The anti-inflammatory compound curcumin is found in
          turmeric. Apply a paste made from turmeric powder and water to the
          afflicted area. After ten to fifteen minutes, rinse it off.
        </p>
        <p className="lg:leading-7 mb-4">
          Tea Tree Oil: Tea tree oil contains antibacterial and
          anti-inflammatory qualities. Apply a few drops of tea tree oil,
          diluted with a carrier oil (such as coconut oil), to the area that is
          afflicted.
        </p>
        <p className="lg:leading-7 mb-4">
          Green Tea Extract: Green tea has anti-inflammatory and antioxidant
          qualities. Using a cotton ball, dab the afflicted region with cooled
          green tea extract.
        </p>
        <p className="lg:leading-7 mb-4">
          Witch Hazel: Pungent and anti-inflammatory in nature, witch hazel is
          astringent. Using a cotton ball, apply witch hazel and gently dab the
          affected region.
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
          fundamental ingredient in the pursuit of a better lifestyle because of
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

export default health10;
