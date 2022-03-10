import './util.js';
import './big-picture.js';
import './editor.js';
import './scale.js';
import './effects.js';
import './validation.js';
import {createPhotos} from './preview.js';
import {setImgFormSubmit, closeUploadModal} from './editor.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    createPhotos(photos);
  });
setImgFormSubmit(closeUploadModal);
