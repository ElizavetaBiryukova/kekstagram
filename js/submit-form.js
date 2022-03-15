import {
  request
} from './fetch.js';
import {
  closeUploadModal,
  resetSetting
} from './editor.js';
import {
  Keys
} from './util.js';


const uploadImgForm = document.querySelector('.img-upload__form');
const errorMessage = document.querySelector('#error').content;
const successMessage = document.querySelector('#success').content;
const main = document.querySelector('main');




//Сообщение об успешной отправке
const createSuccessMessage = () => {
  const success = successMessage.cloneNode(true);
  main.appendChild(success);
};

//Сообщение об ошибке
const createErrorMessage = () => {
  const error = errorMessage.cloneNode(true);
  main.appendChild(error);
};

// Закрытие сообщения об ошибке
const closeErrorMessage = () => {
  const errorModule = document.querySelector('.error');
  errorModule.remove();
};

// Закрытие сообщения об отправке
const closeSuccessMessage = () => {
  const successModule = document.querySelector('.success');
  successModule.remove();

};

//Закрытие окна на кнопку ESCAPE сообщения об отправке
document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    closeSuccessMessage();

  }
});

//Закрытие окна на кнопку ESCAPE сообщения об ошибке
document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    closeErrorMessage();
  }
});

// successButton.addEventListener('click', () => {
//   const successButton = document.querySelector('.success__button');
//   evt.preventDefault();
//   closeSuccessMessage();
// });

// errorButton.addEventListener('click', (evt) => {
//   const errorButton = document.querySelector('.error__button');
//   evt.preventDefault();
//   closeErrorMessage();
// });

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
