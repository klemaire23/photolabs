import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={props.topics} photos={props.photos}/>
      <FavIcon />
    </div>
  )
}

export default TopNavigation;