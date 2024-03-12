import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg3 from "../../../assets/images/blogimg3.png";
import blogimg_3 from "../../../assets/images/blogimg_3.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health3 = () => {

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
            How to Naturally Raise Your Platelet Count
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
            src={blogimg3}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Sustaining a healthy platelet count is critical for appropriate blood
          coagulation and general health. Although certain medical disorders
          might affect platelet counts, leading a healthy lifestyle and include
          certain foods in your diet can encourage your body to naturally
          produce more platelets. We'll look at a number of natural ways to
          raise your platelet count in this article.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Nutrient-Rich Diet: </b> Eating a well-balanced, nutrient-rich diet
          is essential for good health and helps raise platelet counts. Add a
          range of foods high in important nutrients, like vitamin B12, iron,
          vitamin K, and folate. Your diet should consist primarily of fruits,
          whole grains, lean meats, and leafy greens.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Papaya Leaf Extract: </b> Due to its ability to increase platelet
          count, papaya leaf extract has drawn interest. Although some research
          points to its efficacy, it's imperative to speak with a healthcare
          provider before taking any supplements.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Foods High in Vitamin C: </b> Vitamin C is well-known for
          strengthening the immune system and maybe promoting normal platelet
          function. Add bell peppers, broccoli, strawberries, and citrus fruits
          to your diet.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Zinc and pumpkin seeds: </b> Zinc may help produce platelets and is
          involved in immune system function. Include foods high in zinc, such
          as pumpkin seeds, in your diet.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Steer clear of Alcohol and Tobacco: </b> Smoking and excessive
          alcohol use might have a deleterious effect on the generation of
          platelets. Reducing or staying away from these substances can be good
          for your general health.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Remain Hydrated: </b> Sustaining optimum blood circulation requires
          adequate hydration. Make sure you stay hydrated throughout the day by
          drinking enough water.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 max-w-4xl"
            src={blogimg_3}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>Frequent Exercise: </b> Physical activity on a regular basis
          promotes general health and may help maintain normal blood
          circulation. Try to engage in exercises like cycling, walking, or
          jogging.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Handle Stress: </b> Prolonged stress can negatively impact the
          body's processes, including the production of platelets. Engage in
          stress-reduction practices including yoga, meditation, and deep
          breathing.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Sufficient Sleep: </b> Immune system and general health depend on
          good sleep. Make sure your body has enough sleep each night to aid in
          its natural healing processes.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Herbal Teas: </b> Green tea is one herbal tea that may have
          antioxidant qualities that are good for platelet health. See a medical
          expert before incorporating herbal supplements into your regimen.
        </p>
        <p className="lg:leading-7 mb-4">
          Changing your food and lifestyle to a more holistic one can naturally
          raise your platelet count. Even though these techniques could be
          helpful, you should always seek the assistance of a healthcare
          provider for specific guidance, particularly if you have underlying
          medical issues. You can support your body's natural processes and
          maintain a healthy platelet count by prioritizing your overall
          well-being and making informed decisions.
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

export default Health3;
