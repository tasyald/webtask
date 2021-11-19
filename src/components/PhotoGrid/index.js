import React from 'react';
import PropTypes from 'prop-types';

import './PhotoGrid.scss';

const PhotoGrid = (props) => {
  const { photos } = props;
  return(
    <div className="photo-grid container-body">
      <div className="columns is-multiline">
        {photos.map((photo) => (
            <div className="column is-3-desktop is-4-tablet" key={photo.id}>
              <img className="photo-grid-item" src={photo.thumbnailUrl} alt={photo.title} />
            </div>
        ))}
      </div>
    </div>
  )
};

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  })),
};

PhotoGrid.defaultProps = {
  photos: [],
};

export default PhotoGrid;
