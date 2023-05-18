import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

const [fav, setFav] = useState(false);

const handleClick = useCallback(() => {
  setFav(!fav);
}, [fav]);

  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <FavIcon fill={fav === true ? '#FF0000' : '#EEEEEE'}/>
    </div>
  );
}

export default PhotoFavButton;