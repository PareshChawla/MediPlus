import React from 'react'

const ContactCard = ({ logo, title, content }) => {
  return (
    <div>
      <div className='border-2  w-[100%] lg:w-[400px] min-h-full lg:h-80  flex flex-col items-center bg-white   p-6 hover:bg-[#6CB250] transition-colors duration-300 ease-in-out'>
        <div className='p-8 '>{logo}</div>
        <div>
          <h1 className='text-center text-2xl font-bold mb-2 text-gray-800'>{title}</h1>
          <p className='text-center text-[#434f58] leading-7 px-2 '>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard