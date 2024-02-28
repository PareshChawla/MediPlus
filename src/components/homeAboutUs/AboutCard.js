import React from 'react';

const AboutCard = ({ logo, title, content }) => {
  return (
    <div className="md:w-[25%] w-full min-h-fit my-8 flex flex-col justify-center items-center bg-[#3470a1] rounded-md py-14 px-5 hover:bg-[#6CB250] transform transition-transform duration-500 hover:scale-105 hover:shadow-md hover:shadow-gray-500">
      <div>{logo}</div>
      <h1 className='text-xl font-bold pt-7 pb-5'>{title}</h1>
      <p className='text-center'>{content}</p>
    </div>
  );
};

export default AboutCard;
