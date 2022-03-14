import {body} from './big-picture.js';
import {resetSettingEffects} from './effects.js';
import {resetSettingScal} from './scale.js';
import {Keys} from './util.js';
import {request} from './fetch.js';

const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadClose = document.querySelector('#upload-cancel');
const uploadImgForm = document.querySelector('.img-upload__form');
const errorMessage = document.querySelector('#error').content;

//Появляется окно редактирования
uploadInput.addEventListener('change', () => {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

//Сброс настроек
const resetSetting = () => {
  resetSettingScal();
  resetSettingEffects();
};

//Закрытие окна редактирования
const closeUploadModal = () => {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
};

//Закрытие окна редактирования на кнопку "крестик"
uploadClose.addEventListener('click', () => {
  closeUploadModal();
  resetSetting();
});

//Закрытие окна на кнопку ESCAPE
document.addEventListener('keydown', (evt) => {
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    closeUploadModal();
    resetSetting();
  }
});

//Сообщение об ошибке
const createErrorMessage = () => {
  const error = errorMessage.cloneNode(true);
  uploadModal.appendChild(error);
};


const onSuccess = () => {
  closeUploadModal();
  resetSetting();
};

const onError = () => {
  createErrorMessage();
};



uploadImgForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      request(onSuccess, onError, uploadImgForm.method.toUpperCase(), new FormData(uploadImgForm));
});

export {closeUploadModal};
