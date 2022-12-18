import React from 'react'
import { Link   } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <div className='Banner'>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </div>

      <div className='navBarContainer'>

        <div className='navBarLogo'>
          <img src="./assests/logo50.png" alt="" className='bg-[#5645bd]' />
          <Link to='/'><h2>Business Gram</h2></Link>
        </div>


        <div className='navLinks'>
          <Link to='/' className='link-btn'>Home</Link>
          <Link to='/home/businesses' className='link-btn'>Business</Link>
          <Link to='/home/addbusiness' className='link-btn'>Add Business</Link>
          <Link to='/home/contact' className='link-btn'>Contact</Link>
        </div>

      </div>

    </>
  )
}

export default Header
