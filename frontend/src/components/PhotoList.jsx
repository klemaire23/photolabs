import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, openModal, photoFavourites, selectFavourite } = props;

  const handleClick = (photo) => {
    openModal(photo);
  };

  const mappedPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        id={photo.id}
        imageSource={photo.urls.thumb}
        username={photo.user.username}
        hideUserName={photo.hideUserName}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        onClick={() => handleClick(photo)}
      />
    );
  });

  return (
    <ul className="photo-list">
      {photos.length === 0 && <h2>Please wait while we load your photos</h2>}
      {mappedPhotos}
    </ul>
  );
};

export default PhotoList;