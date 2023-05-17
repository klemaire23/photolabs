
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  return (
    <div className="product-list">
      <img className="photo-list--image" src={props.imageSource} />
      {!props.hideUserName && <h3></h3>}
      {props.hideUserName && <h3>{props.username}</h3>}
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