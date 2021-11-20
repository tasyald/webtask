import React from 'react';
import CustomerSupport from 'components/CustomerSupport';
import ContactSocial from 'components/ContactSocial';

import './ContactInfo.scss';

const ContactInfo = () => {
  return(
    <div className="contact-info column is-7">
      <CustomerSupport number="1-500-445" />
      <ContactSocial />
    </div>
  )
};

export default ContactInfo;
