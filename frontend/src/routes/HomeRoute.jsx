import React, { useReducer } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = function (props) {
  // const { state, actions } = useApplicationData();
  // const { photoFavourites } = state;
  // const { selectFavourite } = actions;
  const { photoFavourites, selectFavourite } = props;
  
  

  return (
    <div className="home-route">
      <TopNavigationBar 
      topics={props.topics} 
      photoFavourites={photoFavourites} 
      selectFavourite={selectFavourite}
      handleTopicClick={props.handleTopicClick}
      />
      <PhotoList 
      photos={props.photos} 
      topics={props.topics}
      photoFavourites={photoFavourites} 
      selectFavourite={selectFavourite} 
      similarPhotos={props.photos.similar_photos}
      openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;