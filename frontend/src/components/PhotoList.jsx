import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem
    key={ photo.id }
    imageSource={ photo.imageSource }
    username={ photo.username }
    hideUserName={ photo.hideUserName }
    />;
  });

  return (
  <ul className="photo-list">
    {props.photos.length === 0 && <h2>Please wait while we load your photos</h2>}
    { mappedPhotos }
  </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList