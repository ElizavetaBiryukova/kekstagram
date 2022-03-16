import {request} from './fetch.js';
import {closeUploadModal, resetSetting} from './editor.js';
import {Keys} from './util.js';


const uploadImgForm = document.querySelector('.img-upload__form');
const errorMessage = document.querySelector('#error').content;
const successMessage = document.querySelector('#success').content;
const main = document.querySelector('main');

//Сообщение об успешной отправке
const createSuccessMessage = () => {
  const success = successMessage.cloneNode(true);
  document.addEventListener('keydown', escapeSuccessMessageHandler);
  document.addEventListener('click', closeSuccessMessageHandler);
  main.appendChild(success);
};

//Закрытие сообщения об успешхе клавишей Esc
const escapeSuccessMessageHandler = (evt) => {
  const modalMessage = main.querySelector('.success');
  evt.preventDefault();
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    modalMessage.remove();
  }

  document.removeEventListener('keydown', escapeSuccessMessageHandler);
  document.removeEventListener('click', closeSuccessMessageHandler);
};

//Закрытие сообщения об успехе кликом
const closeSuccessMessageHandler = () => {
  const modalMessage = main.querySelector('.success');
  modalMessage.remove();
  document.removeEventListener('click', closeSuccessMessageHandler);
  document.removeEventListener('keydown', escapeSuccessMessageHandler);
};

//Сообщение об ошибке
const createErrorMessage = () => {
  const error = errorMessage.cloneNode(true);
  main.appendChild(error);
};

//Закрытие сообщения c ошибкой клавишей Esc
const escapeErrorMessageHandler = (evt) => {
  const errorModalMessage = main.querySelector('.error');
  evt.preventDefault();
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    errorModalMessage.remove();
  }

  document.removeEventListener('keydown', escapeErrorMessageHandler);
  document.removeEventListener('click', closeErrorMessageHandler);
};

//Закрытие сообщения с ошибкой кликом
const closeErrorMessageHandler = () => {
  const errorModalMessage = main.querySelector('.error');
  errorModalMessage.remove();

  document.removeEventListener('click', closeErrorMessageHandler);
  document.removeEventListener('keydown', escapeErrorMessageHandler);
};

const onSuccess = () => {
  closeUploadModal();
  resetSetting();
  createSuccessMessage();
};

const onError = () => {
  closeUploadModal();
  resetSetting();
  createErrorMessage();
};

uploadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  request(onSuccess, onError, uploadImgForm.method.toUpperCase(), new FormData(uploadImgForm));
});
