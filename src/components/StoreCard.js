import React from "react";

const StoreCard = ({ src, title, logo }) => {
  return (
    <div
      className=" flex flex-col items-center"
      //   style={{
      //     backgroundColor: "white",
      //     borderRadius: "4px",
      //     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      //     padding: "4px",
      //   }}
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
    </div>
  );
};

export default StoreCard;
