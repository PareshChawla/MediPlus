import React from "react";

const ContactCard = ({ logo, title, content }) => {
  return (
    <div className="flex justify-center">
      <div className="group border-2  w-[80%] lg:w-[400px] min-h-full lg:h-70  flex flex-col items-center bg-[#EFECEC] p-6 hover:bg-[#6CB250] hover:text-white transition-colors duration-200 ease-in-out">
        <div className="p-8 text-[#6CB250] group-hover:text-white">{logo}</div>
        <div>
          <h1 className="text-center text-2xl font-bold mb-2">{title}</h1>
          <p className="text-center  leading-7 px-2 ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
