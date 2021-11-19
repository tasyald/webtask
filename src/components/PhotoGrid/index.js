import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './PhotoGrid.scss';

const PhotoGrid = (props) => {
  const { photos } = props;
  return(
    <div className="photo-grid container-body">
      <div className="columns is-multiline">
        {photos.map((photo) => (
            <div className="column is-3-desktop is-4-tablet" key={photo.id}>
              <div className="photo-actions">
                <FontAwesomeIcon icon={faHeart} color="#FF0000" style={{ marginRight: '0.25rem' }} />
                <span className="like-count" style={{ marginLeft: 0 }}>124</span>
                <span className="action-share">
                  <FontAwesomeIcon icon={faShareAlt} />
                  <div className="share-social-media">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                </span>
              </div>
              <img className="photo-grid-item" src={photo.thumbnailUrl} alt={photo.title} />
              <figcaption className="photo-caption">{photo.title}</figcaption>
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
