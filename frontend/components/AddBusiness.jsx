import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
export default function AddBusiness() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    address: "",
    website: "",
    phoneNumber: "",
  });

  const { name, email, description, address, website, phoneNumber } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      email: email,
      description: description,
      address: address,
      website: website,
      phoneNumber: phoneNumber,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newContact);
      await axios.post("http://localhost:4000/api/v1/addBusiness", body, config);
      setFormData({
        name: "",
        email: "",
        description: "",
        address: "",
        website: "",
        phoneNumber: "",
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };



  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [description,setDescription] = useState('')
  // const [address,setAddress] = useState('')
  // const [website,setWebsite] = useState('')
  // const [phoneNumber,setPhoneNumber] = useState('')
  // async function registerUser(event) {
  //   event.preventDefault()
  //   const response = await fetch('', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, message, description,address,website,phoneNumber}),
  //   })

  //   const data = await response.json()
  //   console.log(data)
  // }

  return (
    <div>
      <Header />

      <main className='mt-20  h-screen items-center flex justify-center  '>
        <form
          className='bg-white flex  w-1/2 border-white border-2'method='POST' 
          onSubmit={(e) => onSubmit(e)}
        >
          <div className='flex-1 text-gray-700  p-20'>
            <h1 className='contact-us'>List Your Business With Us</h1>
            <div className='mt-6 '>

              <div className='pb-4'>
                <label
                  htmlFor='name'
                  className={`block font-bold text-sm pb-2 text-[#BEBAC4]`}
                >
                  Name
                </label>
                <p className='text-sm font-bold text-red-400 '></p>
                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='pb-4'>
                <label
                  htmlFor='email'
                  className={`block font-bold text-sm pb-2 text-[#BEBAC4]`} >
                  Email
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='pb-4'>
                <label
                  htmlFor='text'
                  className={`block font-bold text-sm pb-2 text-[#BEBAC4]`}
                >
                  description
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='description'
                  value={description}
                  onChange={(e) => onChange(e)}

                />
              </div>
              <div className='pb-4'>
                <label
                  htmlFor='text'
                  className={`block font-bold text-sm pb-2 text-[#BEBAC4]`}
                >
                  address
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='address'
                  value={address}
                  onChange={(e) => onChange(e)}

                />
              </div>

              <div className='pb-4'>
                <label
                  htmlFor='text'
                  className={`block font-bold text-sm pb-2 text-[#BEBAC4]`}
                >
                  website
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='text'
                  name='website'
                  value={website}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='pb-4'>
                <label
                  htmlFor='tel'
                  className={`block font-bold text-sm pb-2 text-[#BEBAC4]`}
                >
                  Phone Number
                </label>

                <input
                  className='border-2 border-gray-500 p-2 rounded-md w-1/2'
                  type='tel'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => onChange(e)}

                />
              </div>
              <button
                type='submit'
                className='bg-[#5645bd] text-xl text-white py-3 mt-6 rounded-lg w-full'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>

      <div className='addFooter'>
        <Footer />

      </div>
    </div>
  )
}