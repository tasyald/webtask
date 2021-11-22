import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './SocialMedia.scss';

const SocialMedia = (props) => {
  const { size, margin } = props;

  return (
    <div className="social-media">
      <span className="icon" style={{ fontSize: size, marginRight: margin }}>
        <a href="https://www.facebook.com/danawallet" target="_blank" rel="noreferrer" className="social-link">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </span>
      <span className="icon" style={{ fontSize: size, marginRight: margin }}>
        <a href="https://www.instagram.com/dana.id" target="_blank" rel="noreferrer" className="social-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </span>
      <span className="icon" style={{ fontSize: size, marginRight: margin }}>
        <a href="https://twitter.com/danasupport" target="_blank" rel="noreferrer" className="social-link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </span>
    </div>
  )
};

SocialMedia.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
};

SocialMedia.defaultProps = {
  size: '24px',
  margin: '1rem',
};

export default SocialMedia;
