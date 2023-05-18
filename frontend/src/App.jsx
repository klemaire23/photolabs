import React from 'react';
import HomeRoute from './routes/HomeRoute';
import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';
import './App.scss';




// Note: Rendering a single component to build components in isolation

let photoMockData = photosData;
let topicMockData = topicsData;

const App = () => (

  <div className="App">

    <HomeRoute photos={photoMockData} topics={topicMockData}/>

  </div>

);

export default App

