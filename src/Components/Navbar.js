import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Flower Shop Online
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon">=</span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? 'show' : ''
          } justify-content-end`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" to="/">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shopping-page">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Shopping Card</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
