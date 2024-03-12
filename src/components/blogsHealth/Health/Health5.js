import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg5 from "../../../assets/images/blogimg5.png";
import blogimg_5 from "../../../assets/images/blogimg_5.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health5 = () => {

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

export default Health5;
