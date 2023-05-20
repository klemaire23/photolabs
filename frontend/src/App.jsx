import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoFavourites, setPhotoFavourites] = useState({});
  
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const selectFavourite = (id) => {
    setPhotoFavourites((prevFavourites) => ({
      ...prevFavourites,
      [id]: !prevFavourites[id]
    }));
  };


  return (
    <div className="App">
      <HomeRoute 
      photos={photosData} 
      topics={topicsData} 
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
      photos={photosData}
      topics={topicsData}
      />}
    </div>
  );
};

export default App;
