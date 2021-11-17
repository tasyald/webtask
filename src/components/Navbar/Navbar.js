import React, { Component } from 'react';

import './Navbar.scss';

class Navbar extends Component {
  render () {
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src="/images/dana_logo.png" alt="dana" />
          </a>
      
          <a href="/#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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
}

export default Navbar;
