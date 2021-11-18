import React, { useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClickBurger = () => {
    setActive(!isActive);
  }

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/webtask/home" className="navbar-item">
          <img src="/images/dana_logo.png" alt="dana" />
        </a>
    
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
          <a href="/webtask/about" className="navbar-item">
            About
          </a>

          <a href="/webtask/contact" className="navbar-item">
            Contact Us
          </a>
        </div>
        {isActive && (
          <div role="presentation" className="overlay" onClick={handleClickBurger} />
        )}
      </div>
    
      <div className="navbar-menu">
    
        <div className="navbar-end">
          <a href="/" className="navbar-item">
            About
          </a>
    
          <a href="/" className="navbar-item">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
