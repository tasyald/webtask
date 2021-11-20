import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClickBurger = () => {
    setActive(!isActive);
  }

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/webtask/home" className="navbar-item">
          <img src="/images/dana_logo.png" alt="dana" />
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
          <Link to="/webtask/about" className="navbar-item">
            About
          </Link>
          <Link to="/webtask/contact" className="navbar-item">
            Contact Us
          </Link>
        </div>

        {isActive && (
          <div role="presentation" className="overlay" onClick={handleClickBurger} />
        )}
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/webtask/about" className="navbar-item">
            About
          </Link>
          <Link to="/webtask/contact" className="navbar-item">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
