import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { id, photoFavourites, selectFavourite } = props;

  const handleClick = (event) => {
    event.stopProgagation();
    selectFavourite(id);
  };

  return (
    <div className="photo-list--fav-icon" onClick={() => selectFavourite(id)}>
      <FavIcon fill={photoFavourites ? '#FF0000' : '#EEEEEE'}/>
    </div>
  );
}

export default PhotoFavButton;