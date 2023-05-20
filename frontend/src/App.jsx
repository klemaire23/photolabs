import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [likedPhoto, setLikedPhoto] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // function likedPhotoOn(props) {
  //   const {likedPhoto, setLike} = props;
  // };

  return (
    <div className="App">
      <HomeRoute 
      photos={photosData} 
      topics={topicsData} 
      openModal={openModal} 
      />
      {selectedPhoto && 
      <PhotoDetailsModal 
      selectedPhoto={selectedPhoto} 
      closeModal={closeModal}
      photos={photosData}
      topics={topicsData}
      />}
    </div>
  );
};

export default App;
