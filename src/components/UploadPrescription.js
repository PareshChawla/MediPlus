import React from 'react'
import ContactCard from './ContactCard'
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsImg from '../assets/images/upload.jpeg';
import { FaHandHoldingHeart } from "react-icons/fa";



const UploadPrescription = () => {
    const cities = ["City 1", "City 2", "City 3", "City 4", "City 5"];

    return (
        <div>


            <div className="flex h-screen border-2  ">

                <div className="w-5/12 bg-cover aspect-auto p-10 lg:px-20" >
                    <h1 className="text-2xl font-bold mb-4 text-[#3470a1] ">UPLOAD THE PRESCRIPTION</h1>
                    <img
                        className="w-full  h-fit aspect-auto"
                        src={ContactUsImg}
                        alt="Contact us"
                    />
                    <ul >
                        <li><FaHandHoldingHeart className="inline-block mr-2 text-red" /> Cheap Real Medicine Available Online.</li>
                        <li><FaHandHoldingHeart className="inline-block mr-2" /> Upload a legitimate prescription for our professionals to review.</li>
                        <li><FaHandHoldingHeart className="inline-block mr-2" /> Save up to 20% on prescription drugs.</li>
                        <li><FaHandHoldingHeart className="inline-block mr-2" /> Obtain a home delivery of your medications.</li>
                        <li><FaHandHoldingHeart className="inline-block mr-2" /> Do you have any inquiries? Consult our specialists at no cost.</li>
                        <li><FaHandHoldingHeart className="inline-block mr-2" /> Pharmville Pharmacy will help you stay healthy.</li>
                    </ul>
                </div>

                <div className="w-1/2 p-8">

                    <form id="contactForm" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block">
                                Patient Name<span className="text-red-500">*</span>
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" placeholder="Patient Name" required />
                        </div>

                        <div>
                            <label htmlFor="email" className="block">
                                Email Address<span className="text-red-500">*</span>
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" placeholder="Email Address" required />
                        </div>

                        <div>
                            <label htmlFor="tel" className="block">
                                Phone<span className="text-red-500">*</span>
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="tel" id="tel" name="tel" placeholder="+91" required />
                        </div>

                        <div>
                            <label htmlFor="city" className="block">Select City:</label>
                            <select id="city" name="city" className="w-full p-2 border border-gray-300 rounded">
                                <option value="">Select a city</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="address" className="block">
                                Complete Address<span className="text-red-500">*</span>
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="address" name="address" placeholder="Address" required />
                        </div>

                        <div>
                            <label htmlFor="medicine" className="block">
                                Medicine/Product Name<span className="text-red-500">*</span>
                            </label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="medicine" name="medicine" placeholder="Medicine/Product Name" required />
                        </div>

                        <div>
                            <label htmlFor="prescription" className="block">
                                Upload Prescription (Format-.png/.jpeg/.jpg/.pdf)<span className="text-red-500">*</span>
                            </label>
                            <input className="w-full p-2" type="file" id="prescription" name="prescription" required />
                        </div>

                        <div>
                            <label htmlFor="definition" className="block">
                                Define about medicines (QTY, etc.)<span className="text-red-500">*</span>
                            </label>
                            <textarea className="w-full p-10 border border-gray-300 rounded" id="definition" name="definition" />
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>

            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#a10303] text-center">Note: For Any Urgent Requirements Please Call Us : +91 9319595621</h3>

        </div>

    )
}

export default UploadPrescription 