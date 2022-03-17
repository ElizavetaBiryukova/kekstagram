import './util.js';
import './big-picture.js';
import './editor.js';
import './scale.js';
import './effects.js';
import './validation.js';
import './submit-form.js';
import './filter.js';
import {createPhotos} from './preview.js';
import {showModalError} from './error.js';
import { request } from './fetch.js';

const onSuccess = (photos) => {
  createPhotos(photos);
};

const onError = () => {
  showModalError('Не удалось получить данные c сервера. Попробуйте позже.');
};

request(onSuccess, onError, 'GET');

