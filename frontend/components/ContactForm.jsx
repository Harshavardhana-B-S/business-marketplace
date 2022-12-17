import React, { useState } from 'react'


export default function ContactForm() {
  

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')


  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <main className='  h-screen items-center flex justify-center  '>
        <form
          onSubmit={registerUser}
          className='bg-white flex  w-1/2 border-white border-2  '
        >
          <div className='flex-1 text-gray-700  p-20'>
            <h1 className='text-4xl pb-2 font-bold'>Get Help with 'our name' </h1>
            <p className='text-black-50 mt-1 '>Share any problem, feedback, or any questions you have.</p>
            
            <div className='mt-6 '>
              
              <div className='pb-4'>
                <label
                  htmlFor='name'
                  className={`block font-bold text-sm pb-2`}
                >
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
                  className={`block font-bold text-sm pb-2 `} >
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
                  className={`block font-bold text-sm pb-2 `}
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
                className='bg-[#3AACD9] text-sm text-white py-3 mt-6 rounded-lg w-full'
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
