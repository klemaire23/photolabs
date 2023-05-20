import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const handleClick = () => {
    props.onClick(); 
  };

  return (
    <div className="photo-list--item" onClick={handleClick}>
      <PhotoFavButton 
        id={props.id}
        photoFavourites={props.photoFavourites[props.id]}
        selectFavourite={props.selectFavourite}
      />
      <img className="photo-list--image" src={props.imageSource} />
      {/* {props.hideUserName && <h3>{props.username}</h3>} */}
    </div>
  );
};

export default PhotoListItem;
