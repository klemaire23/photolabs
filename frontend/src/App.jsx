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
  console.log('APP PHOTOFAV', photoFavourites);
  console.log('STATE:', state);
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

  const handleTopicClick = (topicId) => {
      if (topicId) {
        fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos(data);
          })
          .catch((error) => {
            console.error(error);
          });
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
