import React from 'react'
import ContactCard from './ContactCard'
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsImg from '../assets/images/Contact2.jpg';
import ContactForm from './ContactForm';

const Contact = () => {

  return (
    <div>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/contact.png)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">Contact Us</h2>
      </section>
      <div className="m-5 my-10 lg:px-20 p-5 grid lg:flex gap-10 lg:justify-around">
        <ContactCard
          title={"Physical Address"}
          logo={<FaLocationDot size={60} color='#6CB250' />}
          content={"5th Floor, Silver Spring Building, Sector – 126, Noida,Uttar Pradesh-201309"}
        />
        <ContactCard
          title={"Email address"}
          logo={<HiOutlineMailOpen size={60} color='#6CB250' />}
          content={"enquiry@medlife.com"}
        />
        <ContactCard
          title={"Phone Number"}
          logo={<FaPhoneAlt size={60} color='#6CB250' />}
          content={"+91  9319595621"}
        />
      </div>
      <div className="flex h-screen border-2  ">
        <div className="w-5/12 bg-cover aspect-auto p-10 lg:px-20" >
          <img
            className="w-full  h-fit aspect-auto"
            src={ContactUsImg}
            alt="Contact us"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#3470a1]">Send Us a Message</h2>
          <ContactForm id="contactForm" className="space-y-4">
            <input className="w-full p-2 " type="text" placeholder="Name" />
            <input className="w-full p-2 " type="email" placeholder="Email" />
            <input className="w-full p-2 " type="tel" placeholder="Mobile Number" />
            <textarea className="w-full p-2 " placeholder="Message"></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </ContactForm >
        </div>
      </div>
    </div>
  )
}

export default Contact