import React, { useEffect } from 'react'

function BusinessCard({ name, rating, city, full_address, img }) {
  return (
    <div className='foodContainer '>
      <div className='imgBox bg-[#19181C]'>
        <img src={img} alt='image' className='imgSrc bg-[#19181C]'></img>
      </div>
      <div className='flex justify-between text-white text-lg mt-4 font-bold bg-[#19181C]'>
        <h1 className='flex-start bg-[#19181C]'>{name}</h1>
        <p className='flex-end mt-1 bg-[#19181C]'>{rating}⭐</p>
      </div>
      <div className='text-md mt-4 p-2 bg-[#19181C]'>
        <p className='mt-2 bg-[#19181C]'>{full_address}</p>
        <p className=' bg-[#19181C]'>{city}</p>
      </div>
    </div>
  )
}

export default BusinessCard
