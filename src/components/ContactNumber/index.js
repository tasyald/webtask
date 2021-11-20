import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons';

import './ContactNumber.scss';

const ContactNumber = (props) => {
  const { number } = props;
  return(
    <div className="contact-number">
      <div class="contact-icon">
        <FontAwesomeIcon icon={faComments} />
      </div>
      <div class="contact-phone"><b>{number}</b></div>
    </div>
  )
};

ContactNumber.propTypes = {
  number: PropTypes.string,
};

ContactNumber.defaultProps = {
  number: '',
};

export default ContactNumber;
