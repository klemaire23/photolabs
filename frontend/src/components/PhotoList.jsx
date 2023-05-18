import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem
    key={ photo.id }
    imageSource={ photo.urls.thumb }
    username={ photo.username }
    hideUserName={ photo.hideUserName }
    />;
  });

  return (
  <ul className="photo-list">
    { mappedPhotos }
  </ul>
  );
};


export default PhotoList