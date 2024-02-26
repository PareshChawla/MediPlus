import React from "react";

const StoreCard = ({ src, title, logo, address }) => {
  

  return (
    <div
      className=" flex flex-col items-center"
    >
      <img src={logo} alt="logo" />
      <iframe
        title={title}
        src={src}
        width="100%"
        height="200"
        style={{ border: 0, borderRadius: "4px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" text-[#3470A1] font-bold pt-2" >{address}</div>

    </div>
  );
};

export default StoreCard;
