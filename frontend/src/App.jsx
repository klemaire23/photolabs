import React from 'react';

import PhotoList from './components/PhotoList';
import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';

// Note: Rendering a single component to build components in isolation
const App = () => (

  <div className="App">
    
    <PhotoList />
    
  </div>
)

export default App

