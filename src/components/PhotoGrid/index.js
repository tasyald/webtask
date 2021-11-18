import React from 'react';
import PropTypes from 'prop-types';

import './PhotoGrid.scss';

const PhotoGrid = (props) => {
  const { images } = props;
  return(
    <div class="photo-grid container-body">
      <div class="columns is-multiline">
        {images.map((image) => (
            <div class="column is-3" key={image.id}>
              <img class="photo-grid-item" src={image.thumbnailUrl} alt={image.title} />
            </div>
        ))}
      </div>
    </div>
  )
};

PhotoGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  })),
};

PhotoGrid.defaultProps = {
  images: []
};

export default PhotoGrid;
