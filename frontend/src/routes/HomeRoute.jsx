import React, { useReducer } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_FAVOURITE':
      const id = action.payload;
      if (state[id] !== undefined) {
        return { ...state, [id]: !state[id] };
      } else {
        return { ...state, [id]: true };
      }
    default:
      return state;
  }
};

const HomeRoute = function (props) {
  const [photoFavourites, dispatch] = useReducer(reducer, {});

  const selectFavourite = (id) => {
    dispatch({ type: 'SELECT_FAVOURITE', payload: id });
  };

  return (
    <div className="home-route">
      <TopNavigationBar 
      topics={props.topics} 
      photoFavourites={photoFavourites} 
      selectFavourite={selectFavourite} />
      <PhotoList 
      photos={props.photos} 
      photoFavourites={photoFavourites} 
      selectFavourite={selectFavourite} 
      openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;