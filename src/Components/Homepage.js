import React from 'react'
import '../Styles/Homepage.css'
import Navbar from './Navbar'
import {useNavigate } from 'react-router-dom'
import Footer from './Footer'


export default function Homepage() {
  const navigate = useNavigate()
  return (
    <div className='outerDivHome'>
      <Navbar />
      <div className="mainContent align-items-center justify-content-center d-flex">
        <h1 className='shadow'>Welcome To Paradise</h1>
        <button className='shopButton btn btn-success mb-4' onClick={() => navigate('/shopping-page')}>Start Browsing</button>
      </div>
      <Footer />
    </div>

  )
}
