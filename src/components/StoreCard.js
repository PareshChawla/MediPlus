import { FaDiscourse } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import Telephoneimg from '../assets/images/telephone.png';
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
          <div className="font-semibold hover:text-[#3470A1] flex items-center gap-1">
            <FaRocketchat color="#6CB250" size={18}/> {time}
          </div>
          <div className="font-semibold hover:text-[#3470A1] flex items-center gap-1">
          <FaTruckFast color="#6CB250" size={18}/>Free Home Delivery
          </div>
          <div className="font-semibold hover:text-[#3470A1] flex items-center gap-1">
          <FaDiscourse color="#6CB250" size={18}/> Exclusive Discount
          </div>
        </div>

        <div className=" text-center">
          <div>
          <div className="text-[#3470A1] font-bold  ">CALL NOW</div>

          <div className="flex items-center text-[#6CB250] font-semibold cursor-pointer">
            <img className="h-4 w-5 object-cover mr-2" src={Telephoneimg} alt="Telephoneimg" />
            <span>{telephone}</span>
          </div>
          
          <div className="text-[#6CB250] font-semibold cursor-pointer flex items-center gap-1">
            <FaPhoneVolume color="#6CB250" size={18}/>{phone}
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
