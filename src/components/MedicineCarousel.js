import React from 'react'

const MedicineCarousel = ({img, medName}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <div className='rounded-full lg:w-32 w-16 lg:h-36'>
            <img className='rounded-full' src={img} alt="meds" />
        </div>
        <h1 className='font-bold text-[#6cb250] my-3 text-center'>{medName}</h1>
    </div>
  )
}

export default MedicineCarousel