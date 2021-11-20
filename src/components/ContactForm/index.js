import React from 'react';

import './ContactForm.scss';

const ContactForm = () => {
  return(
    <div className="contact-form">
      <h2 className="title">Contact Us</h2>
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
    </div>
  )
};

export default ContactForm;
