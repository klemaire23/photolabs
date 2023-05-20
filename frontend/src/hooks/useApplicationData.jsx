import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    case 'SET_PHOTO_FAVOURITES':
      return { ...state, photoFavourites: action.payload };
    case 'TOGGLE_FAVOURITE':
      const { id } = action.payload;
      return {
        ...state,
        photoFavourites: {
          ...state.photoFavourites,
          [id]: !state.photoFavourites[id]
        }
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const initialState = {
    selectedPhoto: null,
    photoFavourites: {}
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const openModal = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: null });
  };

  const selectFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: { id } });
  };

  return {
    state,
    actions: {
      openModal,
      closeModal,
      selectFavourite
    },
  };
};

export default useApplicationData;