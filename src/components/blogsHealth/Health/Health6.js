import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg6 from "../../../assets/images/blogimg6.png";
import blogimg_6 from "../../../assets/images/blogimg_6.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health6 = () => {

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
          <header className=" text-4xl font-bold text-[#3470a1] flex items-center justify-center">
            Herbal teas' advantages for reducing stress and promoting relaxation
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
            src={blogimg6}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Since ancient times, people have drank herbal tea for its many health
          advantages, which include relaxation and stress reduction. While
          everyone reacts differently, several herbal teas are said to have
          relaxing properties that might reduce stress. The following are some
          possible advantages of herbal tea for relaxation and stress relief:
        </p>
        <b>Herbs that Calm: </b>
        <br />
        <p className="lg:leading-7 mb-4">
          <b>Chamomile: </b> Contains apigenin, an antioxidant that attaches
          itself to certain brain receptors to facilitate sleep and relaxation.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Lavender: </b> Known for its ability to relax and soothe, lavender
          tea has the potential to lessen anxiety and stress.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Peppermint: </b> Has a calming effect and may aid in releasing
          tension and relaxing muscles.
        </p>
        <b>Apoptogenic Characteristics: </b>
        <br />
        <p className="lg:leading-7 mb-4">
          <b>Holy basil: </b> It also known as tulsi, is an apoptogenic herb
          that may help the body cope with stress and foster serenity.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Ashwagandha: </b>Known for its apoptogenic qualities, this herb may
          aid in the body's ability to control anxiety and stress.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Decreased Level of Caffeine: </b> <br />
          Since many herbal teas are inherently caffeine-free, you can drink
          them in the evening without worrying about it keeping you up.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Content of Antioxidants: </b> <br />
          Antioxidants included in herbal teas can aid in the body's fight
          against oxidative stress and may even improve general health.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Drinking plenty of water: </b> <br />
          For general health, it's important to stay hydrated. Herbal teas offer
          a tasty method to up your fluid consumption while also easing stress
          and encouraging relaxation.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 max-w-4xl"
            src={blogimg_6}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>Ceremony and Awareness: </b> <br />
          Making herbal tea and drinking it can develop into a soothing ritual
          that eases tension and encourages awareness.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Better Sleep: </b> <br />
          Some herbal teas, such those made from passionflower or valerian root,
          are said to contain mild sedative properties that may help with better
          sleep.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Gut Health: </b> <br />
          Herbal teas with digestive properties, such as those containing
          peppermint or ginger, can help maintain gut health. An increasing
          amount of research is showing a connection between mental health and
          intestinal health.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Effects of Aromatherapy: </b> <br />
          The fragrance of herbal teas, particularly those made with plants like
          lavender or chamomile, can have calming effects.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Natural and Non-Addictive: </b> <br />
          Compared to some other stress-relieving techniques, herbal tea s are
          typically non-addictive and natural.
        </p>
        <p className="lg:leading-7 mb-4">
          It's crucial to remember that, even though they might be a useful
          supplement to stress-reduction techniques , herbal teas cannot replace
          expert medical advice or care. Before adding new herbal medicines to
          their routine, people with particular health conditions or concerns
          should speak with a healthcare physician.
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

export default Health6;
