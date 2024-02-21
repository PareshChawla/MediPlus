import React from 'react'

const CardFullfillment = ({logo, title, content}) => {
  return (
    <div className='border-2 border-[#6CB250] hover:border-[#3470a1] w-[100%] lg:w-[370px] min-h-full lg:h-80 rounded-xl flex flex-col shadow-lg hover:shadow-xl hover:shadow-blue-500/10  items-center'>
    <div className='p-8'>{logo}</div>
    <div>
        <h1 className='text-center text-[#3470a1] font-bold text-2xl p-5'>{title}</h1>
        <p className='text-center text-[#434f58] leading-7 px-2'>{content}</p>
    </div>
    </div>
  )
}

export default CardFullfillment