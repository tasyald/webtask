import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './SocialMedia.scss';

const SocialMedia = () => (
  <div className="social-media">
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
);

export default SocialMedia;
