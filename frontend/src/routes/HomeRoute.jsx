import React, { useReducer } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = function (props) {
  const { state, actions } = useApplicationData();
  const { photoFavourites } = state;
  const { selectFavourite } = actions;
  

  return (
    <div className="home-route">
      <TopNavigationBar 
      topics={props.topics} 
      photoFavourites={photoFavourites} 
      selectFavourite={selectFavourite} />
      <PhotoList 
      photos={props.photos} 
      topics={props.topics}
      photoFavourites={photoFavourites} 
      selectFavourite={selectFavourite} 
      openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;