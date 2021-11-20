import React from 'react';
import SocialMedia from 'components/SocialMedia';

import './ContactSocial.scss';

const ContactSocial = () => (
  <section className="contact-social">
    <h2 className="title">Social Media</h2>
    <p>Feel free to contact us at one of our social media outlets below</p>
    <div className="socials">
      <SocialMedia size="30px" margin="1.5rem" />
    </div>
  </section>
)

export default ContactSocial;
