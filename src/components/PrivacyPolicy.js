import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-fixed bg-center bg-cover relative grid place-items-center  min-h-[460px] uppercase text-5xl font-bold bg-[url(/src/assets/images/privacypolicy.webp)]">
        <div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #997878 -50%, #000000 100%)",
            opacity: 0.49,
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
          className="absolute top-0 left-0 w-full h-full opacity-50 "
        ></div>
        <h1 className=" text-white z-[2] text-[40px]">
        PRIVACY POLICY
        </h1>
      </section>
      <div>
      <h1 className=" text-black z-[2] text-[40px] relative grid place-items-center pt-10">
          Privacy Policy
        </h1>
      </div>
      <div className="mb-5 m-2 px-4 pt-3 lg:m-3 lg:px-24">
        <div className="flex flex-col md:flex-row gap-10 ">
          <div>
            <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Who we are
            </h1>
            <div className="text-[#434f58] flex flex-col gap-5 mt-5">
              <p className="  lg:leading-7">
              <b>Suggested text:</b> To aid with spam detection, we gather the information provided in the comments form when users leave comments on the website, in addition to the visitor's IP address and browser user agent string.
              </p>
              <p className="lg:leading-7">
              The Gravatar service may get an anonymized string (also known as a hash) generated from your email address in order to determine whether you are using it. You can access the Gravatar service privacy policy at https://automattic.com/privacy/. Your profile image appears to the public within the context of your comment once it has been approved.
              </p>
              <p className=" lg:leading-7">
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Media
              </h1>
              <b>Text recommendation:</b> When submitting photos to the website, stay away from including embedded location data (EXIF GPS). Any location data from the website's photos can be downloaded and extracted by website visitors.
              </p>
              <p className="  lg:leading-7">
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Cookies
              </h1>
              <b>Text suggestion:</b> You have the option to consent to the saving of your name, email address, and website in cookies when you leave a remark on our website. These are for your convenience so that when you write another comment, you won't have to enter your information again. There will be cookies left over after a year.
              </p>
              <p className="  lg:leading-7">
              To find out if your browser accepts cookies, we will set a temporary cookie when you visit our login page. This cookie is deleted when your browser is closed and doesn't contain any personal information.
              </p>
              <p className="  lg:leading-7">
              We will also set up a few cookies when you join in to store your screen display preferences and login details. Screen settings cookies expire after a year, but login cookies are only good for two days. If you choose "Remember Me," your login will stay active for a period of two weeks. Your account's login cookies will be deleted once you log out.
              </p>
              <p className="  lg:leading-7">
              Your browser will save an extra cookie if you modify or publish an article. This cookie only contains the post ID of the article you just changed; it contains no personal information. It runs out in a day.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Embedded content from other websites
              </h1>
              <p className="  lg:leading-7">
              <b>Suggested text:</b> This website's articles may contain embedded content (pictures, videos, articles, etc.). When another website's content is embedded, it acts exactly like the user would have if they had visited the other website.
              </p>
              <p className="  lg:leading-7">
              These websites have the potential to gather personal information about you, employ cookies, incorporate extra third-party tracking, and keep track of how you engage with the embedded material. If you have an account and are logged in, they may also track how you interact with the embedded content.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Who we share your data with
              </h1>
              <p className="  lg:leading-7">
              <b>Text suggestion:</b> Your IP address will be included in the password reset email if you request one.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              How long we retain your data
              </h1>
              <p className="  lg:leading-7">
              <b>Text suggestion:</b> If you leave a comment, both the comment and any associated information are kept forever. This is so that, rather than keeping them in a moderation queue, we can instantly identify and approve any follow-up comments.
              </p>
              <p className="  lg:leading-7">
              We also keep the personal data that users enter in their user profiles when they register on our website, if any. All users are able to view, modify, or remove their personal data at any moment; however, they are unable to modify their username. Administrators of the website can view and change that data as well.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              What rights you have over your data
              </h1>
              <p className="  lg:leading-7">
              <b>Text suggestion:</b> If you have an account on our website or have posted comments, you can ask to have an exported file containing all of the personal information we have on file, including any information you have given us. You have the option to ask us to delete any personal information we may have about you. This excludes any information that we are required to maintain for security, legal, or administrative reasons.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Where your data is sent
              </h1>
              <p className="  lg:leading-7 pb-14">
              <b>Recommended text:</b> An automatic spam detection tool may be used to review comments left by visitors.
              </p>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;
