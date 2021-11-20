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
        <FontAwesomeIcon icon={faFacebookSquare} />
      </span>
      <span className="icon" style={{ fontSize: size, marginRight: margin }}>
        <FontAwesomeIcon icon={faInstagram} />
      </span>
      <span className="icon" style={{ fontSize: size, marginRight: margin }}>
        <FontAwesomeIcon icon={faTwitter} />
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
