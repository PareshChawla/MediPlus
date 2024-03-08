import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg11 from "../../../assets/images/blogimg11.png";
import blogimg_11 from "../../../assets/images/blogimg_11.jpg";

const health11 = () => {
  return (
    <>
      <section className="relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            Six Things About High Blood Pressure You Should Know
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
            src={blogimg11}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Elevated amounts of pressure in the arteries are a frequent medical
          disease known as hypertension, or high blood pressure. This implies
          that pumping blood through the circulatory system requires more effort
          from the heart. This condition is commonly known as the “silent
          killer” due to its gradual onset and lack of symptoms. If addressed,
          it can result in severe health issues.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>
            Here are a few important details regarding hypertension, or high
            blood pressure:
          </b>
        </p>
        <ul className="lg:leading-7 mb-4">
          <li>
            <b>Silent Threat:</b> Because high blood pressure, sometimes called
            hypertension, frequently exhibits no outward signs, it is sometimes
            referred to as a "silent killer." This implies that it may cause
            silent artery damage and raise your risk of major health problems
            for years without being discovered.
          </li>
          <li>
            <b>Risk factors:</b> Although high blood pressure can strike anyone,
            some people are more susceptible to getting it than others. These
            include age, bad eating habits, inactivity, smoking, binge drinking,
            and a history of medical issues in the family.
          </li>
          <li>
            <b>Health Complications:</b> Heart disease, stroke, kidney disease,
            eye issues, cognitive decline, and other major health concerns can
            all be brought on by persistently high blood pressure. To lower
            these dangers, blood pressure levels must be closely monitored and
            controlled.
          </li>
        </ul>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_11}
            alt="mediplus"
          />
        </div>

        <p className="lg:leading-7 mb-4">
          <b>Frequent Monitoring is Critical: </b>Early detection and treatment
          of hypertension depend on routine blood pressure checks. You can take
          it using a blood pressure monitor at home or by visiting your doctor
          on a regular basis. Being aware of your numbers enables you to take
          preventative measures to keep your blood pressure at a healthy level.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Treatment choices: </b>There are a number of choices accessible to
          you if you are diagnosed with high blood pressure. These could include
          medication that your healthcare physician has prescribed as well as
          lifestyle adjustments including diet and exercise plans. It's critical
          to heed the guidance of your medical practitioner and show up for
          routine examinations so that your development may be tracked.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>
            Recall that controlling high blood pressure is essential to
            preserving general health and averting major consequences.{" "}
          </b>
          For individualized guidance and care, always seek the assistance of a
          healthcare professional.
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

export default health11;
