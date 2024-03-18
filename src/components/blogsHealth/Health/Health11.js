import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg11 from "../../../assets/images/blogimg11.png";
import blogimg_11 from "../../../assets/images/blogimg_11.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health11 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchComments();
  }, []);

  const [formData, setFormData] = useState({
    name: "",

    comment: "",
  });

  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/comments/");
      setComments(response.data);
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // changes formData variable name to sendFormData to avoid conflict of formData's and formData object - changed by Thouseef (Remove this comment after reviewing)
    const sendFormData = new FormData(); // Create FormData object for file upload
    for (const key in formData) {
      sendFormData.append(key, formData[key]);
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/post-comment/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        }
      );
      // Handle successful response (e.g., display success message)
      console.log("Data submitted successfully:", response.data);
      fetchComments();
      setComments([...comments, formData]);
      setFormData({
        // Clear form data after successful submission
        name: "",

        comment: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle errors (e.g., display error message)
    }
  };

  return (
    <>
      <section className="px-5 relative grid place-items-center h-80 bg-[#F2F7F6] w-full">
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

      <div className=" px-6 mt-11 mx-auto  max-w-5xl ">
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
            className="mx-auto bg-white object-contain mt-5 "
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

        <div className="mx-5 py-20 flex flex-col items-left ">
          <h2 className="text-lg font-semibold text-[#3470a1] mb-2">
            Leave a Reply
          </h2>

          <form
            id="postComment"
            onSubmit={handleSubmit}
            className="flex flex-col items-start"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData.name}
                type="text"
                id="name"
                name="name"
                className={`w-full p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md`}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback
              </label>
              <textarea
                onChange={handleChange}
                value={formData.comment}
                id="comment"
                name="comment"
                rows="4"
                cols="60"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 font-medium rounded-md text-white bg-green-500 hover:bg-blue-500"
            >
              Post Comment
            </button>
          </form>
        </div>
        <div>
          {/* Header for Comments Section */}
          <h2 className="text-lg font-semibold text-[#3470a1] ml-11 mt-5 mb-2">
            Comments
          </h2>

          {/* Display submitted comments */}
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 mt-4 rounded-md mb-5 ml-11"
            >
              <h3 className="text-lg font-semibold">{comment.name}</h3>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Health11;
