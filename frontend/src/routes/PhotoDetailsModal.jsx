import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';

export const PhotoDetailsModal = (props) => {
  const { selectedPhoto, 
    photos, 
    topics, 
    closeModal, 
    openModal, 
    photoFavourites, 
    selectFavourite 
  } = props;
  
  if (!selectedPhoto) {
    return null;
  }

  const handleFavouriteClick = (event) => {
    event.stopPropagation();
    selectFavourite(selectedPhoto.id);
  };

  const isFavourite = photoFavourites && photoFavourites[selectedPhoto.id];

  const selectedPhotoTopic = topics && topics.length > 0 && topics.find((topic) => topic.id === selectedPhoto.topicId);
  const similarPhotos = photos && photos.length > 0 && photos.filter((p) => p.topicId === selectedPhoto.topicId && p.id !== selectedPhoto.id);


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
          <div className="photo-details-modal--image-container">
          <div className="photo-details-modal--favicon">
            <PhotoFavButton
              id={selectedPhoto.id}
              isFavourite={isFavourite}
              onClick={handleFavouriteClick}
              />
          </div>
          </div>
            <img className="photo-details-modal--image" src={selectedPhoto.urls.regular} alt={selectedPhoto.alt_description} />
            <div className="photo-details-modal--user-details">
            <img className="photo-details-modal--user-profile" src={`profile-1.jpg`} />
            <div className="photo-details-modal--user-info">
              <div className="photo-details-modal--user">{selectedPhoto.user.username}</div>
              <div className="photo-details-modal--userlocation">{selectedPhoto.location.city}, {selectedPhoto.location.country}</div>
            </div>
            </div>
            {selectedPhotoTopic && <div>Topic: {selectedPhotoTopic.title}</div>}

          <hr className="horizontal-break" />

          <h3 className="photo-details-modal--header">Related Photos</h3>
          <div className="photo-details-modal-similar--container">
          <div className="photo-details-modal--images">
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
    </div>
  );
};

export default PhotoDetailsModal;