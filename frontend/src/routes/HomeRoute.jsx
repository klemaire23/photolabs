import React, {useState} from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = function (props) {

  const [photoFavourites, setIsPhotoFavourites] = useState({});
  const selectFavourite = (id) => {
    console.log("##0 ID:", id);
    if (photoFavourites[id] !== undefined) {
      setIsPhotoFavourites({...photoFavourites, [id]: !photoFavourites[id]});
    } else {
      setIsPhotoFavourites({...photoFavourites, [id]: true});
    }
  };

  console.log('#1FAVES:', photoFavourites);

  return (
  <div className="home-route">
    <TopNavigationBar topics={props.topics}/>
    <PhotoList 
    photos={props.photos} 
    photoFavourites={photoFavourites} 
    selectFavourite={selectFavourite}
    />
  </div>
  );
};
export default HomeRoute;