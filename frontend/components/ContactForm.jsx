import React, { useState } from 'react'
import Header from './Header'

export default function ContactForm() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function registerUser(event) {
    event.preventDefault()
    const response = fetch('http://localhost:4000/api/v1//contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ name, email, message }),
    }).then((res) => res.json()).catch(err => console.log(err))


  }

  return (
    <div>
      <Header />
      <main className='  h-screen items-center flex justify-center'>
        <form className='bg-white flex  w-1/2 border-white border-2' method='POST'>
          <div className='flex-1 text-gray-700  p-20' id='contactBox '>
            <h1 className='contact-us'>Contact Us</h1>
            <h1 className='text-4xl pb-2 font-bold text-[#BEBAC4]' >Get Help with 'our name' </h1>
            <p className='text-[cornsilk] 50 mt-1 '>Share any problem, feedback, or any questions you have.</p>

            <div className='mt-6 '>

              <div className='pb-4'>
                <label htmlFor='name'className={`block text-[#BEBAC4] text-sm pb-2`}>
                  Name
                </label>
                <p className='text-sm font-bold text-red-400 '></p>
                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='name'
                

                  value={name}

                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='pb-4'>
                <label
                  htmlFor='email'
                  className={`block text-sm pb-2 text-[#BEBAC4]`} >
                  Email
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='email'
                  name='email'
                
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className='pb-4'>
                <label
                  htmlFor='text'
                  className={`block text-[#BEBAC4] text-sm pb-2 `}
                >
                  Message
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='message'

                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  

                />
              </div>



              <button
                type='submit'
                className='text-sm text-white py-3 mt-6 rounded-lg w-full' id='contact-btn'
                onClick={registerUser}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
