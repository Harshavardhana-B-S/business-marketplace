import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Businesses from '../components/Businesses'
import BusinessCard from '../components/BusinessCard'
import AddBusiness from '../components/AddBusiness'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App to='/home' />,
  },
  {
    path:"/home/contact",
    element: <ContactForm />,
  },
  {
    path:"/home/businesses",
    element: <Businesses />,
  },
  {
    path:"/home/businesscard",
    element: <BusinessCard />,
  },
  {
    path:"/home/addbusiness",
    element: <AddBusiness />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
