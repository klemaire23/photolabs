import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list--fav-icon" onClick={() => props.selectFavourite(props.id)}>
      <FavIcon fill={props.photoFavourites ? '#FF0000' : '#EEEEEE'}/>
    </div>
  );
}

export default PhotoFavButton;