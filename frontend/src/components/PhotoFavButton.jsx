import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  // const { id, photoFavourites, selectFavourite } = props;

  const handleLikeClick = (event) => {
    event.stopPropagation();
    props.selectFavourite(props.id);
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleLikeClick}>
      <FavIcon fill={props.photoFavourites ? '#FF0000' : '#EEEEEE'}/>
    </div>
  );
}

export default PhotoFavButton;