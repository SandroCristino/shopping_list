import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Flower Shop Online</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item" to='/'>
                <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' to="/shopping-page">Shop</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link'>Shopping Card</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
