import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg8 from "../../../assets/images/blogimg8.png";
import blogimg_8 from "../../../assets/images/blogimg_8.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health8 = () => {

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

        <div className="py-20 flex flex-col items-left ml-11">
          <h2 className="text-lg font-semibold text-[#3470a1] mb-2">
            Leave a Reply
          </h2>

          <form id="postComment" onSubmit={handleSubmit} className="flex flex-col items-start">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Feedback
              </label>
              <textarea
                onChange={handleChange}
                value={formData.comment}
                id="comment"
                name="comment"
                rows="3"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[500px] shadow-sm sm:text-sm border-gray-300 rounded-md"
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
            <div key={index} className="bg-gray-100 p-4 mt-4 rounded-md mb-5 ml-11">
              <h3 className="text-lg font-semibold">{comment.name}</h3>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>



      </div >
    </>
  );
};

export default Health8;
