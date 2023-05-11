import React from 'react'
import '../Styles/Homepage.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className='outerDivHome'>
      <Navbar />
      <div className="mainContent align-items-center justify-content-center d-flex">
        <h1 className='shadow'>Welcome To Paradise</h1>
        <Link className='shopButton btn btn-success mb-4' to='/shopping-page'>Start Browsing</Link>
      </div>
      <Footer />
    </div>
  )
}
