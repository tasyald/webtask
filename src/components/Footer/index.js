import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from 'components/SocialMedia';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container-body columns is-multiline">
      <div className="column is-6 is-12-mobile footer-follow">
        <div className="footer-follow-us">
          Follow Us:
        </div>
        <SocialMedia />
      </div>

      <div className="column is-6 footer-copyrights">
        <div className="footer-links">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>
        <div>
          <span className="copyright-year">&copy; 2017</span> DANA – PT. Espay Debit Koe. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
