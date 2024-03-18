import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg7 from "../../../assets/images/blogimg7.png";
import blogimg_7 from "../../../assets/images/blogimg_7.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health7 = () => {
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
            Five Natural Ways to Treat Dry Skin in the Winter
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
            src={blogimg7}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Many of us struggle with dry skin, an unwanted companion as the winter
          frost sets in. Intense heat, dry air, and strong winds can deplete the
          skin's natural moisture content, leaving it tight, flaking, and
          painful. Even if the market is flooded with skincare products, your
          kitchen cupboard may hold the answer to your winter skin problems.
          Let's look at five efficient DIY solutions that will help you achieve
          a dewy, glowing skin in the winter.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Olive Oil Magic:</b> A mainstay in many kitchens, olive oil does
          wonders for dry skin. Rich in healthy fats and antioxidants, it works
          wonders as a natural moisturizer. Apply a tiny bit of extra virgin
          olive oil to your hands, face, and any other dry areas before going to
          bed. Overnight use will result in softer, more supple skin when you
          wake up.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Honey Healing:</b> Honey is a natural humectant, which means that
          it draws and holds moisture, in addition to being a delicious delight.
          Apply a tiny coating of raw honey to your face to make a homemade
          honey mask. After letting it sit for ten to fifteen minutes, rinse it
          with warm water. What was the outcome? plumped up and well-fed skin.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Avocado Avil:</b> Avocado is a great cure for dry skin in addition
          to being a popular toast topping. Mash half of an avocado and stir in
          one tsp honey. Apply and let this creamy mixture sit on your face for
          approximately fifteen minutes. Rich in vitamins and good fats,
          avocados can help your skin seem younger and more refreshed.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 "
            src={blogimg_7}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4 mt-5">
          <b>Milk Moisture:</b> A relaxing and mild treatment for dry skin is
          milk. Take a relaxing soak in the bathtub after adding several cups of
          whole milk to the water. While the natural fats in milk hydrate your
          skin, the lactic acid in it exfoliates dead skin cells. Soak a
          washcloth in cold milk and apply it to your face for ten to fifteen
          minutes as a quick treatment.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Coconut Oil Elixir: </b> Because of its moisturizing qualities,
          coconut oil is a multipurpose treatment for dry skin. Apply coconut
          oil to damp skin right after a warm shower, when your pores are still
          open. Your skin will stay moisturized all day long since it will seal
          in the moisture. For general skin health, you can also include coconut
          oil in your diet.
        </p>
        <p className="lg:leading-7 mb-4">
          Don't let your winter sparkle fade due to dry skin. Accept the ability
          of natural cures to hydrate and shield your skin in the chilly months.
          These natural cures for dry skin include several benefits, such as the
          richness of olive oil, the tenderness of milk, the creaminess of
          avocado, the sweetness of honey, and the adaptability of coconut oil.
          Bid farewell to wintertime miseries and welcome to a glowing, dewy
          complexion.
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

export default Health7;
