import React from 'react';
import PropTypes from 'prop-types';
import Feature from 'components/Feature';

import './Features.scss';

const Features = (props) => {
  const { title, features } = props;
  return(
    <section className="features container-body">
      <h1 className="features-title title is-2">{title}</h1>
      <div className="columns is-variable is-4">
        {features.map((feature, i) => (
          <Feature feature={feature} key={i} />
        ))}
      </div> 
    </section>
  )
};

Features.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
};

Features.defaultProps = {
  title: 'Lorem Ipsum',
  features: [],
};

export default Features;
