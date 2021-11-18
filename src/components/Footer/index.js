import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container-body columns">
      <div className="column is-6 footer-follow">
        <div>
          Follow Us:
        </div>
        <div>
        <span class="icon">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </span>
        <span class="icon">
        <FontAwesomeIcon icon={faInstagramSquare} />
        </span>
        <span class="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        </div>
      </div>

      <div className="column is-6 footer-copyrights">
        <div className="footer-links">
          <a href="/" className="footer-links">Menu</a>
          <a href="/" className="footer-links">Menu</a>
          <a href="/" className="footer-links">Menu</a>
        </div>
        <div>
          <span>&copy; 2017</span> DANA – PT. Espay Debit Koe. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
