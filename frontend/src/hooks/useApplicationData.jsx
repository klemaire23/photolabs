import { useState, useReducer } from 'react';

const initialState = {
  selectedPhoto: null,
  photoFavourites: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_PHOTO':
      // return { ...state, selectedPhoto: action.payload };
      let newState = {...state, selectedPhoto: action.payload};
      console.log('#9 SETSELECTED:', newState);
      return newState
    case 'SET_PHOTO_FAVOURITES':
      return { ...state, photoFavourites: action.payload };
    case 'TOGGLE_FAVOURITE':
      const { id } = action.payload;
      console.log('HELLO');
        if (state.photoFavourites[id]) {
          return {
            ...state,
            photoFavourites: {
              ...state.photoFavourites,
              [id]: !state.photoFavourites[id]
            }
             
          };
        }
      return {
        ...state,
        photoFavourites: {
          ...state.photoFavourites,
          [id]: true
        }
         
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const openModal = (photo) => {
    // dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: null });
  };

  const selectFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: { id } });
    console.log('##STATE:', state);
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