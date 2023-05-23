import React, { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const { state, actions } = useApplicationData();
  const { selectedPhoto, photoFavourites } = state;

  const { openModal, closeModal, selectFavourite } = actions;

  useEffect(() => {
    const fetchPhotosAndTopics = async () => {
      try {
        const photosResponse = await fetch('/api/photos');
        const photosData = await photosResponse.json();
        setPhotos(photosData);

        const topicsResponse = await fetch('/api/topics');
        const topicsData = await topicsResponse.json();
        setTopics(topicsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPhotosAndTopics();
  }, []);

  const handleTopicClick = async (topicId) => {

    try {
      if (topicId) {
        const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        const data = await response.json();
        setPhotos(data);
      }
    } catch (error) {
      console.error('There was an error fetching the related photos', error)
    }
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        handleTopicClick={handleTopicClick}
      />
      {selectedPhoto &&
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          selectFavourite={selectFavourite}
          photoFavourites={photoFavourites}
          closeModal={closeModal}
          openModal={openModal}
          photos={photos}
          topics={topics}
        />}
    </div>
  );
};

export default App;
