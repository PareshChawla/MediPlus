import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const StoreCard = ({ src, title, logo, address, time, phone, telephone }) => {
  return (
    <div className=" flex flex-col items-center gap-4">
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

      <div className=" text-[#3470A1] font-bold pt-2">{address}</div>

      <div className=" flex w-full justify-between">
        <div>
          <div className="font-semibold hover:text-[#3470A1] ">
            <FontAwesomeIcon className="text-[#6CB250]" icon={faRocketchat} /> {time}
          </div>
          <div className="font-semibold hover:text-[#3470A1]">
          <FontAwesomeIcon className="text-[#6CB250]" icon={faRocketchat} /> Free Home Delivery
          </div>
          <div className="font-semibold hover:text-[#3470A1]">
          <FontAwesomeIcon className="text-[#6CB250]" icon={faRocketchat} /> Exclusive Discount
          </div>
        </div>

        <div className=" text-center">
          <div className="text-[#3470A1] font-semibold  ">CALL NOW</div>
          <div className="text-[#6CB250] font-semibold ">{telephone}</div>
          <div className="text-[#6CB250] font-semibold">{phone}</div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
