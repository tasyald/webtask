import ContactNumber from 'components/ContactNumber';
import React from 'react';

import './ContactForm.scss';

const ContactForm = () => {
  return(
    <section className="contact-form column is-5">
      <h2 className="title">Contact Us</h2>
      <div className="is-mobile">
        <ContactNumber number="1-500-445" center />
        <p className="fill-form">Or kindly fill out this form, we'll get back to you as quickly as possible</p>
      </div>
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">E-mail</label>
          <div className="control">
            <input className="input" type="email" />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea"></textarea>
          </div>
        </div>
      </form>

      <button className="button-send button is-primary is-fullwidth">Send</button>
    </section>
  )
};

export default ContactForm;
