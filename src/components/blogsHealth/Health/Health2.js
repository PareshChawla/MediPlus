import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg2 from "../../../assets/images/blogimg2.png";
import blogimg_2 from "../../../assets/images/blogimg_2.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health2 = () => {

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            Controlling Hypertension to Live a Healthier Life
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
              &nbsp;/&nbsp;&nbsp;&nbsp;JANUARY 30, 2024&nbsp;/&nbsp;&nbsp;&nbsp;
              <Link to="/health">HEALTH</Link>
            </h2>
          </div>
        </div>
      </section>

      <div className="mt-11 mx-auto  max-w-4xl ">
        <div className="text-center">
          <img
            className="mx-auto w-full  bg-white object-contain mt-2"
            src={blogimg2}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Our fast-paced society makes it simple to ignore the quiet danger that
          frequently resides within of us: hypertension, or elevated blood
          pressure. Managing your blood pressure is an essential step in living
          a better and more satisfying life, not just a matter of statistics.
          With the help of this in-depth guide, you should be able to
          effectively control your blood pressure and implement long-lasting
          lifestyle adjustments for improved general health.
        </p>
        <p className="lg:leading-7 mb-4">
          Comprehending High Blood Pressure Investigate the cause of
          hypertension first. Learn the fundamentals, such as what blood
          pressure is, how it is calculated, and why those figures mean
          anything. Explore the various phases of hypertension and the reasons
          that prevention depends on early detection.
        </p>
        <p className="lg:leading-7 mb-4">
          The Quiet Danger Draw attention to how sneaky hypertension is—it's
          sometimes referred to as the "silent killer." Talk about how high
          blood pressure can cause serious health problems such renal
          difficulties, heart disease, and stroke even though there aren't
          always evident signs. Stress the value of routine examinations to keep
          an eye on blood pressure readings.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 max-w-4xl"
            src={blogimg_2}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Changes in Lifestyle Describe the part that lifestyle plays in blood
          pressure control. Examine how stress reduction, exercise, and
          nutrition affect hypertension. Give helpful advice on adopting
          stress-relieving practices like mindfulness and meditation, including
          regular physical activity, and developing a heart-healthy diet.
        </p>
        <p className="lg:leading-7 mb-4">
          Establishing a Network of Support Acknowledge the significance of a
          support network in blood pressure management. Urge readers to share
          their path toward a better living with friends and family. Talk about
          the advantages of obtaining expert advice from nutritionists and
          medical professionals, as well as joining support groups.
        </p>

        <p className="lg:leading-7 mb-4">
          Observation and Drug Administration Talk about the value of routine
          blood pressure checks, whether done at home or by medical
          professionals. Examine the circumstances in which taking medication
          might be required, stressing the value of following doctor's orders.
          Talk about typical questions and misunderstandings around
          prescriptions for hypertension.
        </p>
        <p className="lg:leading-7 mb-4">
          In closing, stress that managing your blood pressure is a proactive
          and empowering step toward living a better life. Remind readers that
          even modest, long-term lifestyle adjustments can make a big difference
          in their general well-being. Encourage them to make decisions that
          will lead to a heart-healthy future, prioritize routine checkups, and
          remain informed.
        </p>
        <p className="lg:leading-7 mb-4">
          Enlighten readers about the variety of approaches used to treat
          hypertension, including food modifications, lifestyle adjustments,
          and, when required, medicines. Promote a comprehensive approach to
          blood pressure management and remind readers that they may start along
          the road to a healthier and more heart-conscious existence with
          dedication and cooperation from their healthcare providers.
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

export default Health2;
