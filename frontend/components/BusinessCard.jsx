import React, { useEffect } from 'react'

function BusinessCard(props) {

  return (
    <div className='foodContainer'>
      {/* <div className='imgBox'>
        <img src={props.img} alt='image' className='imgSrc'></img>
      </div> */}
      <div className='flex justify-between'>
      <h3 className='flex-start'>{props.name}</h3>
        <p className='flex-end mt-1'>{props.rating}⭐</p>
        
      </div>

      <p>{props.city}</p> 
      <p>{props.full_address}</p>
      
    </div>
  )
}

export default BusinessCard
