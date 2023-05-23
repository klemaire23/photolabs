import React, { useCallback, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, photoFavourites, selectFavourite}) {  

  const {state} = useApplicationData();
  // console.log('#10 STATE:', state);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    selectFavourite(id);
  };

  const checkIfLiked = (photoFavourites, id) => {
    if (!photoFavourites) {
      return '#EEEEEE';
    } else if (Object.keys(photoFavourites).length === 0) {
      return '#EEEEEE';
    } else if (!photoFavourites[id]) {
      return '#EEEEEE'
    }

    return '#FF0000';
  }

  return (
    <div className="photo-list--fav-icon" onClick={handleLikeClick}>
    {/* <FavIcon fill={(Object.keys(photoFavourites)?.length === 0 || !photoFavourites[id]) ? '#FF0000' : '#EEEEEE'}/> */}
    <FavIcon fill={checkIfLiked(photoFavourites, id)} />
    </div>
  );
}

export default PhotoFavButton;