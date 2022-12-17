import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ContactForm from '../components/ContactForm'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/contact",
    element: <ContactForm />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
