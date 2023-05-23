import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { id, imageSource, username, userCity, userCountry, photoFavourites, selectFavourite, userProfile, onClick } = props;
  const handleClick = (event) => {
    onClick(event);
  };

  return (
    <div className="photo-list--item" onClick={handleClick}>
      <PhotoFavButton
        id={id}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
      />
      <div className="photo-list--image-container">
        <img className="photo-list--image" src={imageSource} />
        <div className="photo-list--user-details">
          <img className="photo-list--user-profile" src={userProfile} />
          <div className="photo-list--user-info">
            {username}
            <div className="photo-list--user-location">
              {userCity}, {userCountry}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
