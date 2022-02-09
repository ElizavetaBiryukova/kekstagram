import {
  photos
} from './data.js';

const photosList = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (({
  url,
  likes,
  comments
}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  return photoElement;
});

const createPhotos = () => {
  const photosFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    photosFragment.appendChild(createPhoto(photo));
  });

  photosList.appendChild(photosFragment);
};

export { createPhotos };
