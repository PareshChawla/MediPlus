import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import blogimg10 from "../../../assets/images/blogimg10.png";
import blogimg_10 from "../../../assets/images/blogimg_10.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health10 = () => {

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
            How to Reduce Skin Inflammation Naturally
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
            src={blogimg10}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          To make sure you don't have an allergic reaction, always remember to
          do a patch test before taking any of these treatments. Seek more
          guidance and treatment alternatives from a healthcare provider if your
          skin condition gets worse or continues.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>
            The following natural treatments could be able to reduce skin
            inflammation:
          </b>
        </p>
        <ul className="lg:leading-7 mb-4">
          <li>
            <b>Aloe Vera Gel:</b> Aloe vera contains calming and
            anti-inflammatory qualities. Directly apply pure aloe vera gel to
            the injured area.
          </li>
          <li>
            <b>Cold Compress:</b> Using a cold compress can help calm inflamed
            skin and lessen inflammation. Ice cubes should be wrapped in a fresh
            cloth and applied gently to the injured area.
          </li>
          <li>
            <b>Oatmeal Bath:</b> Compounds in colloidal oatmeal help soothe
            inflamed skin. To a warm bath, add finely ground oatmeal and soak
            for fifteen to twenty minutes.
          </li>
          <li>
            <b>Tea made with chamomile:</b> Chamomile contains anti-inflammatory
            qualities. Strong chamomile tea should be brewed, allowed to cool,
            and then applied with a clean cloth to the afflicted area.
          </li>
        </ul>
        <div className="text-center">
          <img
            className="mx-auto w-full bg-white object-contain mt-5"
            src={blogimg_10}
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
          Coconut Oil: Coconut oil contains anti-inflammatory and hydrating
          qualities. On the afflicted area, apply a thin coating of pure coconut
          oil.
        </p>
        <p className="lg:leading-7 mb-4">
          Honey: Honey contains anti-inflammatory and antibacterial qualities.
          On the afflicted region, apply a thin layer of raw, organic honey. Let
          it sit for ten to fifteen minutes before rinsing.
        </p>
        <p className="lg:leading-7 mb-4">
          Turmeric Paste: The anti-inflammatory compound curcumin is found in
          turmeric. Apply a paste made from turmeric powder and water to the
          afflicted area. After ten to fifteen minutes, rinse it off.
        </p>
        <p className="lg:leading-7 mb-4">
          Tea Tree Oil: Tea tree oil contains antibacterial and
          anti-inflammatory qualities. Apply a few drops of tea tree oil,
          diluted with a carrier oil (such as coconut oil), to the area that is
          afflicted.
        </p>
        <p className="lg:leading-7 mb-4">
          Green Tea Extract: Green tea has anti-inflammatory and antioxidant
          qualities. Using a cotton ball, dab the afflicted region with cooled
          green tea extract.
        </p>
        <p className="lg:leading-7 mb-4">
          Witch Hazel: Pungent and anti-inflammatory in nature, witch hazel is
          astringent. Using a cotton ball, apply witch hazel and gently dab the
          affected region.
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
          fundamental ingredient in the pursuit of a better lifestyle because of
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

export default Health10;
