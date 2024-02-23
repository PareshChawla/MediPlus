import React, {useState} from 'react'
import ContactCard from './ContactCard'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  }
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
          logo={<MdEmail size={60} color='#6CB250' />}
          content={"enquiry@medlife.com"}
        />
        <ContactCard
          title={"Phone Number"}
          logo={<FaPhoneAlt size={60} color='#6CB250' />}
          content={"+91  9319595621"}
        />
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
            Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="message">
            Message
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea className="no-resize appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-40 resize-none" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Contact