
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return (
    <div className="photo-list--item">
      <PhotoFavButton />
      <img className="photo-list--image" src={props.imageSource} />
      {/* {props.hideUserName && <h3>{props.username}</h3>} */}
    </div>
  );
};

export default PhotoListItem

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
  
}