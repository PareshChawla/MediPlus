import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
    <section className="bg-fixed bg-center bg-cover relative grid place-items-center  min-h-[460px] uppercase text-5xl font-bold bg-[url(/src/assets/images/terms-conditions.jpg)]">
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
        <h1 className=" text-white z-[2] text-[40px] text-center">
        TERMS & CONDITIONS
        </h1>
    </section>
    <div>
      <h1 className=" text-black z-[2] text-[40px] relative grid place-items-center pt-10 pb-16 text-center">
          TERMS AND CONDITIONS
        </h1>
      </div>
  </>
  );
};

export default Terms;