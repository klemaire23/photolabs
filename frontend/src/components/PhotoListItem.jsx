import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { id, imageSource, username, userCity, userCountry, photoFavourites, selectFavourite, topics, photos, onClick } = props;
  const handleClick = () => {
    props.onClick(); 
  };

  return (
    <div className="photo-list--item" onClick={handleClick}>
       <PhotoFavButton 
        id={id}
        photoFavourites={photoFavourites?.[id]}
        selectFavourite={selectFavourite}
      />
      <div className="photo-list--image-container">
        <img className="photo-list--image" src={imageSource} />
        <div className="photo-list--user-details">
          <img className="photo-list--user-profile" src={`profile-1.jpg`} />
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
