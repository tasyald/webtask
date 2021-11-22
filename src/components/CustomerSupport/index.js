import React from 'react';
import PropTypes from 'prop-types';
import ContactNumber from 'components/ContactNumber';

import './CustomerSupport.scss';

const CustomerSupport = (props) => {
  const { number } = props;

  return(
    <div className="customer-support">
      <h2 className="title">Customer Support</h2>
      <ContactNumber number={number} />
      <p className="contact-description">
        Contact our customer support or email us at <a href="mailto:help@dana.id" className="email"><b>help@dana.id</b></a> if you need help
      </p>
    </div>
  )
};

CustomerSupport.propTypes = {
  number: PropTypes.string,
};

CustomerSupport.defaultProps = {
  number: '',
};

export default CustomerSupport;
