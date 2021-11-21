import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons';

import './ContactNumber.scss';

const ContactNumber = (props) => {
  const { number, center } = props;
  return(
    <div className="contact-number" style={{ justifyContent: center ? 'center' : 'initial' }}>
      <div className="contact-icon">
        <FontAwesomeIcon icon={faComments} />
      </div>
      <div className="contact-phone"><b>{number}</b></div>
    </div>
  )
};

ContactNumber.propTypes = {
  number: PropTypes.string,
  center: PropTypes.bool,
};

ContactNumber.defaultProps = {
  number: '',
  center: false,
};

export default ContactNumber;
