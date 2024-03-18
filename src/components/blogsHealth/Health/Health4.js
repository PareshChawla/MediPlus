import { Link } from "react-router-dom";
import medlogo from "../../../assets/images/medilogo1.jpg";
import blogimg4 from "../../../assets/images/blogimg4.png";
import blogimg_4 from "../../../assets/images/blogimg_4.jpg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Health4 = () => {
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
            Natural Ways to Lessen Cold and Cough
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

      <div className=" px-6 mt-11 mx-auto  max-w-5xl ">
        <div className="text-center">
          <img
            className="mx-auto w-full  bg-white object-contain mt-2"
            src={blogimg4}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          Coughs and colds can become an unwanted companion as the seasons
          change. Even though there are many of pharmacological treatments
          accessible, many people would rather look into natural remedies to
          reduce their symptoms. We'll look at a number of tried-and-true
          natural solutions in this blog post that can help ease the pain of
          colds and coughs.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Hydration is Key: </b> Maintaining adequate hydration is one of the
          easiest yet most powerful treatments. Drinking enough water can ease
          sore throats and keep the respiratory passages wet. To stay hydrated
          during the day, use clear broths, herbal teas, and water.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Honey: </b> Honey's inherent antibacterial qualities make it an
          effective weapon against cold and cough symptoms. Add a teaspoon of
          honey to your preferred herbal tea or warm water. But keep in mind
          that because honey can cause botulism, it should not be given to
          infants younger than one year of age.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Ginger's Healing Potential: </b> Ginger is well known for having
          antiviral and anti-inflammatory qualities. Steep fresh ginger slices
          in boiling water to make a calming ginger tea. This may assist in
          relieving congestion and soothing a scratchy throat.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Breathe in the Power of Steam: </b> A traditional treatment for
          congestion involves inhaling steam. With your head covered with a
          towel, lean over a bowl of hot water and take deep breaths. A few
          drops of eucalyptus oil can improve the experience, but proceed with
          caution—especially if the infant is small.
        </p>
        <div className="text-center">
          <img
            className="mx-auto bg-white object-contain mt-5 "
            src={blogimg_4}
            alt="mediplus"
          />
        </div>
        <p className="lg:leading-7 mb-4">
          <b>Calming Saltwater Gargle: </b> If you have a sore throat, a
          soothing saltwater gargle can help. Gargle with a solution made from a
          teaspoon of salt and warm water several times a day to help relieve
          irritation and inflammation.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Consolation in Chicken Soup: </b> It's still true what Grandma
          said—chicken soup is good for more than just consolation. Warm chicken
          soup, full of minerals and with anti-inflammatory qualities, is a
          great way to relieve cold symptoms.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>Minty Fresh Relief: </b> Peppermint is well-known for its ability
          to relieve sore throats and nasal congestion, whether it is brewed as
          a tea or used as an essential oil. Relief may be obtained by drinking
          peppermint tea or inhaling peppermint vapors.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>The Immune-Boosting Magic of Garlic: </b>Garlic has antibacterial
          and immune-boosting qualities, so it's not just for food. To bolster
          your body's defenses, add fresh garlic to your meals or think about
          taking a supplement.
        </p>
        <p className="lg:leading-7 mb-4">
          <b>The Restorative impact of Rest: </b> Don't undervalue the
          restorative impact of rest in the midst of everyday chaos. Get as much
          sleep as possible to give your body the time it needs to heal.
        </p>
        <p className="lg:leading-7 mb-4">
          Even while these home cures for cold and cough symptoms can help, it's
          important to pay attention to your body's signals and see a doctor,
          particularly if your symptoms are persistent. There are many cures
          found in nature that you can incorporate into your routine to support
          a holistic approach to wellness. Because every person's body is
          different, it could take some trial and error to identify the
          treatments that are most effective for you. As you move through the
          seasons, embrace the restorative power of nature to maintain your
          health and fortitude.
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

export default Health4;
