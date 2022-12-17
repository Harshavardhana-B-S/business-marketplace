import React from 'react'

function Footer() {
  return (
    <>
    <hr className='hr' />
      <div className='footer'>
        <div>
          <img src="./assests/logo50.png" alt="" className='bg-[#5645bd]' />
        </div>

        <div className='footerDetails' id='Resources'>
          <h3>Resources</h3>
          <p>Docs<br />
            Download Desktop App<br />
            Security<br />
            Terms of Service<br />
            Privacy Policy</p>
        </div>

       



        
        <div className='footerDetails' id='Company'>
          <h3> Company</h3>
          <p>Careers<br />
          Contact Us<br />
          Blog<br/>
          </p>
        </div>

        
        <div className='footerDetails' id='findUs'>
          <h3>Find us</h3>
          <p>LinkedIn<br />
          YouTube<br />
          Twittery<br />
          Discord<br />
          </p>
        </div>

         <div>
         </div>
      </div>
          

          <div className='copyRights'>
               <h3>©2022 Business Gram, Inc.</h3>
          </div>

    </>
  )
}

export default Footer;
