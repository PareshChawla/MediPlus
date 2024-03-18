import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg9 from "../../../assets/images/blogimg9.png";
import blogimg_9 from "../../../assets/images/blogimg_9.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health9 = () => {
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
            Six Items to Consume Daily to Promote Better Brain Health
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
            src={blogimg9}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Enhancing brain health is critical to general health and cognitive
          performance. You may improve the health of your brain by including
          specific foods in your diet on a regular basis. The general health of
          the brain depends on eating a varied, well-balanced diet. Keeping your
          body hydrated, exercising frequently, and mentally stimulating
          activities (such as solving puzzles or picking up new skills) all
          support the maintenance of cognitive function. It's critical to
          continue learning throughout life to preserve cognitive function. To
          keep your mind fresh and involved, take up new interests, go to
          workshops, or continue your education. Smoking and binge drinking can
          both have a negative impact on brain function. It is recommended to
          use these substances sparingly or not at all.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>
            The following six foods are ones you ought to think about including
            in your meals:
          </b>
        </p>
        <ul className="lg:leading-7 mb-4">
          <li>
            <b>Blueberries:</b> Rich in antioxidants, blueberries may enhance
            memory and shield the brain from oxidative stress.
          </li>
          <li>
            <b>Fatty Fish (like Salmon):</b> Packed with omega-3 fatty acids,
            fatty fish enhances memory, maintains brain function, and may even
            stave off cognitive decline.
          </li>
        </ul>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 "
            src={blogimg_9}
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
          Leafy greens, such as kale and spinach: Leafy greens, which are rich
          in antioxidants and vital nutrients like vitamin K, folate, and
          beta-carotene, may enhance memory and mental clarity while also
          slowing the aging process.
        </p>
        <p className="lg:leading-7 mb-4">
          Turmeric: Curcumin, the active component of turmeric, has antioxidant
          and anti-inflammatory properties that may enhance memory and brain
          health in general.
        </p>
        <p className="lg:leading-7 mb-4">
          Nuts and seeds: Packed with healthful fats, vitamin E, and
          antioxidants. They might aid in shielding the brain from inflammatory
          and oxidative stress.
        </p>
        <p className="lg:leading-7 mb-4">
          Whole Grains: These include Quinoa and Brown Rice. Whole grains, being
          high in fiber, complex carbs, and vital nutrients, offer the brain a
          consistent source of energy.
        </p>
        <p className="lg:leading-7 mb-4">
          Your mental health can benefit by engaging in joyful activities and
          keeping an optimistic view on life. It is essential to keep the brain
          healthy for general wellbeing and cognitive performance. Engaging in
          mindfulness exercises can enhance cognitive function overall, lower
          stress levels, and increase focus. Recall that each person's path to
          brain health is distinct. It's crucial to speak with a healthcare
          provider for specific guidance and to address any illnesses or worries
          you may have.
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
          fundamental ingredient in the pursuit of a better lifestyle because to
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

export default Health9;
