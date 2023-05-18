import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';


const PhotoList = (props) => {

  const mappedPhotos = props.photos.map((photo) => {

    return <PhotoListItem
    key={ photo.id }
    id={ photo.id }
    imageSource={ photo.urls.thumb }
    username={ photo.user.username }
    hideUserName={ photo.hideUserName }
    photoFavourites={props.photoFavourites}
    selectFavourite={props.selectFavourite}
    />;
  });

  return (
  <ul className="photo-list">
    {props.photos.length === 0 && <h2>Please wait while we load your photos</h2>}
    { mappedPhotos }
  </ul>
  );
};


export default PhotoList