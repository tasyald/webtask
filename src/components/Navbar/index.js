import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import danaLogo from 'assets/images/dana_logo.png';

import './Navbar.scss';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClickBurger = () => {
    setActive(!isActive);
  }

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/home" className="navbar-item">
          <img src={danaLogo} alt="dana" />
        </Link>

        <button
          onClick={handleClickBurger}
          className={`navbar-burger${isActive ? ' is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div className={`navbar-dropdown${isActive ? ' is-active' : ''}`}>
          <Link to="/about" className="navbar-item" onClick={handleClickBurger}>
            About
          </Link>
          <Link to="/contact" className="navbar-item" onClick={handleClickBurger}>
            Contact Us
          </Link>
        </div>

        {isActive && (
          <div role="presentation" className="overlay" onClick={handleClickBurger} />
        )}
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
