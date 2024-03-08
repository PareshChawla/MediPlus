import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg12 from "../../../assets/images/blogimg12.png";
import blogimg_12 from "../../../assets/images/blogimg_12.jpg";

const health12 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            Five Easy Steps to Get Past a Weight Loss Plateau{" "}
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
            src={blogimg12}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>
            Although reaching a weight reduction plateau can be discouraging,
            it's crucial to keep in mind that this is a typical stage of the
            process. The good news is that you can persevere and keep moving
            closer to your objectives with the aid of easy-to-implement
            techniques. We'll look at five simple strategies in this blog post
            to help you get off a weight loss plateau and rekindle your fitness
            passion.
          </b>
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Redesign your Exercise Program:</b>
        </p>
        <p className="lg:leading-7 mb-4">
          It might be time to change up your workout routine if you have been
          following it for a long. Consider mixing in other exercise regimens,
          such as yoga, weight training, or HIIT. You can force your body to
          move outside of its comfort zone and accelerate your metabolism by
          varying the type, duration, or intensity of your workout.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Emphasis on Foods Rich in Nutrients:</b>
        </p>
        <p className="lg:leading-7">
          When hitting a plateau, it's critical to reassess your nutrition.
          Choose nutrient-dense foods such as whole grains, fruits, vegetables,
          and lean meats. These choices give you the vital vitamins, minerals,
          and fiber you need to maintain your metabolism and feel full.
        </p>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_12}
            alt="mediplus"
          />
        </div>

        <p className="lg:leading-7 mb-4">
          <b>Maintain Proper Hydration and Portion Control:</b>
        </p>
        <p className="lg:leading-7 mb-4">
          Staying hydrated is essential for supporting body functioning and
          keeping a healthy metabolism. Don't forget to consider portion
          quantities. If overindulged in, even healthful foods might result in a
          surplus of calories. You can learn to listen to your body's signals of
          hunger and fullness by engaging in mindful eating.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Make Sleep a Priority and Control Stress:</b>
        </p>
        <p className="lg:leading-7 mb-4">
          Reducing body weight requires both stress management and getting
          enough sleep. Overeating can result from persistent stress, and
          hormones linked to hunger and metabolism can be upset by sleep
          deprivation. Make getting enough sleep a priority, and make time for
          stress-relieving exercises like yoga, deep breathing, or meditation.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Monitor Your Development and Honor Non-Scale Triumphs:</b>
        </p>
        <p className="lg:leading-7 mb-4">
          Even though the scale might not move at times, you can still be making
          progress. Keep an eye out for any more beneficial developments, such
          more energy, a happier mood, or better physical performance.
          Appreciate these non-scale successes since they show that your efforts
          are having an impact.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>In summary:</b>
        </p>
        <p className="lg:leading-7">
          Recall that overcoming a plateau in your weight reduction is a normal
          part of the process. You may continue advancing toward your objectives
          and accelerate your development by putting these easy strategies into
          practice. Remember to be consistent, patient, and, above all, gentle
          to yourself. You can succeed at this!
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

export default health12;
