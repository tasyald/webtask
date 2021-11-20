import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactInfo from 'components/ContactInfo';

class Contact extends Component {
  render() {
    return (
      <div className="contact page container-body">
        <div className="columns">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    )
  };
};

export default Contact;
