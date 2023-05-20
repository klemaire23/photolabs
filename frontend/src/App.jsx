import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute 
      photos={photosData} 
      topics={topicsData} 
      openModal={openModal} 
      />
      {selectedPhoto && 
      <PhotoDetailsModal 
      photo={selectedPhoto} 
      closeModal={closeModal}
      photos={photosData}
      topics={topicsData}
      />}
    </div>
  );
};

export default App;
