import React from 'react';
import PropTypes from 'prop-types';

import './Introduction.scss';

const Introduction = (props) => {
  const { title, description } = props;
  return(
    <section className="introduction container-body">
      <div className="columns">
        <div className="introduction-text column is-4">
          <h1 class="title">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="column is-8">
          <img class="introduction-illustration" src="/images/illustration.jpg" alt="illustration"/>
        </div>
      </div>
    </section>
  )
};

Introduction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Introduction.defaultProps = {
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum turpis orci.',
};

export default Introduction;
