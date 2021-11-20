import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container-body columns is-multiline">
      <div className="column is-6 is-12-mobile footer-follow">
        <div className="footer-follow-us">
          Follow Us:
        </div>
        <div className="footer-social-media">
          <span className="icon">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </div>
      </div>

      <div className="column is-6 footer-copyrights">
        <div className="footer-links">
          <Link to="/" className="footer-link">Menu</Link>
          <Link to="/" className="footer-link">Menu</Link>
          <Link to="/" className="footer-link">Menu</Link>
          <Link to="/" className="footer-link">Menu</Link>
        </div>
        <div>
          <span className="copyright-year">&copy; 2017</span> DANA – PT. Espay Debit Koe. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
