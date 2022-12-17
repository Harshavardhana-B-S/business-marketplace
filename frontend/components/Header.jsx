import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='Banner'>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </div>

      <div className='navBarContainer'>

        <div className='navBarLogo'>
          <img src="./assests/logo50.png" alt="" className='bg-[#5645bd]' />
          <h2>Business Gram</h2>
        </div>


        <div className='navLinks'>
          <button className='link'>Home</button>
          <button className='link'>Business</button>
          <button className='link'>Add Business</button>
          <button className='link'>Contact</button>
        </div>

      </div>

    </>
  )
}

export default Header
