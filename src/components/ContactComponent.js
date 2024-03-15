import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const ContactComponent = () => {
  return (
    <div className="flex flex-col fixed bottom-16 right-0 m-0 w-[50px] z-10">
      <span className="bg-[#6cb250] w-full h-[50px] flex justify-center items-center rounded-ss-lg">
        <a
          href="https://www.linkedin.com/company/the-entrepreneurship-network/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="white" size={18} />
        </a>
      </span>
      <span className="bg-[#3470A1] w-full h-[50px] flex flex-col items-center rounded-es-lg">
        <a
          className="text-center flex flex-col items-center"
          href="tel:782-773-8719"
          title="10am to 7pm"
        >
          <AiFillPhone color="white" size={18} />
          <p className="text-xs !important text-white text-center">
            10am to 7pm
          </p>
        </a>
      </span>
    </div>
  );
};

export default ContactComponent;
