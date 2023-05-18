import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => 
  <div className="home-route">
    <TopNavigationBar topics={props.topics}/>
    <PhotoList photos={props.photos}/>
  </div>

export default HomeRoute;