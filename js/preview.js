import {
  photos
} from './data.js';
import {
  showBigPicture
} from './full-image.js';

const photosList = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (picture => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = picture.url;
  photoElement.querySelector('.picture__likes').textContent = picture.likes;
  photoElement.querySelector('.picture__comments').textContent = picture.comments.length;


  photoElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  });
  return photoElement;
});

const createPhotos = () => {
  const photosFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    photosFragment.appendChild(createPhoto(photo));
  });

  photosList.appendChild(photosFragment);
};

createPhotos();

export {
  createPhotos
};
