import React, { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
// import photosData from './mocks/photos.json';
// import topicsData from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const { state, actions } = useApplicationData();
  const { selectedPhoto, photoFavourites } = state;
  const { openModal, closeModal, selectFavourite } = actions;


  return (
    <div className="App">
      <HomeRoute 
      // photos={photosData} 
      // topics={topicsData} 
      openModal={openModal} 
      photoFavourites={photoFavourites}
      selectFavourite={selectFavourite}
      />
      {selectedPhoto && 
      <PhotoDetailsModal 
      selectedPhoto={selectedPhoto} 
      selectFavourite={selectFavourite}
      photoFavourites={photoFavourites}
      closeModal={closeModal}
      // photos={photosData}
      // topics={topicsData}
      />}
    </div>
  );
};

export default App;
