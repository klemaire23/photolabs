import React from 'react';
import FavIcon from '../components/FavIcon';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

export const PhotoDetailsModal = (props) => {
  const { photo, photos, topics, closeModal, openModal, photoFavourites, selectFavourite } = props;

  if (!photo) {
    return null;
  }

  const handleFavouriteClick = (event) => {
    event.stopPropagation();
    selectFavourite(photo.id);
  };

  const isFavourite = photoFavourites && photoFavourites[photo.id];

  const selectedPhotoTopic = topics && topics.length > 0 && topics.find((topic) => topic.id === photo.topicId);
  const similarPhotos = photos && photos.length > 0 && photos.filter((p) => p.topicId === photo.topicId && p.id !== photo.id);


  return (
    <div className="photo-details-modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="photo-details-modal--close-button" onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_428_287)">
                <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_428_287">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="photo-details-modal--favicon">
            <FavIcon
              isFavourite={isFavourite}
              onClick={handleFavouriteClick}
              />
          </div>
          
            <img className="photo-details-modal--image" src={photo.urls.regular} alt={photo.alt_description} />
            {/* <div>{photo.user.username}</div>
            <div>{photo.description}</div> */}
            {selectedPhotoTopic && <div>Topic: {selectedPhotoTopic.title}</div>}
          
          <div className="photo-details-modal--images">
            <h3 className="photo-details-modal--header">Similar Photos</h3>
          {similarPhotos && similarPhotos.length > 0 ? (
            <PhotoList
              photos={similarPhotos}
              topics={topics}
              openModal={openModal}
              photoFavourites={photoFavourites}
              selectFavourite={selectFavourite}
              />
          ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;