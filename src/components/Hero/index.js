import React from 'react';
import PropTypes from 'prop-types';

import './Hero.scss';

const Hero = (props) => {
  const { title, subtitle, image } = props;
  return(
    <section
      className="hero"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')` }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <button className="button is-primary is-outlined">More Info</button>
        </div>
      </div>
    </section>
  )
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Lorem Ipsum',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum turpis orci.',
  image: '/images/placeholder_hero.jpg',
};

export default Hero;
