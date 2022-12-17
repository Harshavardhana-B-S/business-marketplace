import React from 'react'
import { useFormik } from 'formik'

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
      terms: '',
    },
  })

  return (
    <div>
      <main className='  h-screen items-center flex justify-center  '>
        <form
          onSubmit={formik.handleSubmit}
          className='bg-white flex  w-1/2 border-white border-2  '
        >
          <div className='flex-1 text-gray-700  p-20'>
            <h1 className='text-4xl pb-2 font-bold'>Get Help with 'our name' </h1>
            <p className='text-black-50 mt-1 '>Share any problem, feedback, or any questions you have.</p>
            
            <div className='mt-6 '>
              {/* Name input field */}
              <div className='pb-4'>
                <label
                  htmlFor='name'
                  className={`block font-bold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? 'text-red-400'
                      : ''
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : 'Name'}
                </label>
                <p className='text-sm font-bold text-red-400 '></p>
                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='name'
                  
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className='pb-4'>
                <label
                  htmlFor='email'
                  className={`block font-bold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? 'text-red-400'
                      : ''
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : 'Email'}
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='email'
                  name='email'
                  
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Message input field */}
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
                  
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
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
