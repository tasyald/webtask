import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactInfo from 'components/ContactInfo';

class Contact extends Component {
  render() {
    return (
      <div className="contact page container-body">
        <div className="columns">
          <div className="column is-5">
            <ContactForm />
          </div>

          <div className="column is-7">
            <ContactInfo />
          </div>
        </div>
      </div>
    )
  };
};

export default Contact;
