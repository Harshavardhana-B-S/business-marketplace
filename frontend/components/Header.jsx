import React from 'react'
import { Link, Route} from 'react-router-dom'

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
          <Link to='/' className='link-btn'>Home</Link>
          <Link to='./businesses' className='link-btn'>Business</Link>
          <Link to='./addbusiness' className='link-btn'>Add Business</Link>
          <Link to='./contact' className='link-btn'>Contact</Link>
        </div>

      </div>

    </>
  )
}

export default Header
