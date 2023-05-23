import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const { topics, photos, photoFavourites, selectFavourite, handleTopicClick } = props;

  //  Changes FavIcon in Nav Bar to indicate if there are liked photos

  const displayAlert = Object.values(photoFavourites).some((isFavourite) => isFavourite);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        photos={photos}
        handleTopicClick={handleTopicClick}
      />
      <FavIcon
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        displayAlert={displayAlert}
      />
    </div>
  )
}

export default TopNavigation;