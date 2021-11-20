import React from 'react';
import PropTypes from 'prop-types';

import './Feature.scss';

const Feature = (props) => {
  const { feature } = props;
  return(
    <div className="feature column" key={feature.id}>
      <div>
        <img className="feature-icon" src="/images/direction.png" alt="direction" />
        <h3 className="feature-title title is-4">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  )
};

Feature.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

Feature.defaultProps = {
};

export default Feature;