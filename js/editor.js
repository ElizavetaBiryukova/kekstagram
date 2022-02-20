import {
  body
} from './big-picture.js';
import {
  effectLevel,
  usedClass
} from './effects.js';
import {
  scaleControlValue,
  previewImage
} from './scale.js';

const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc'
};
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadClose = document.querySelector('#upload-cancel');

//Появляется окно редактирования
uploadInput.addEventListener('change', () => {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

//Сброс настроек
const resetSetting = () => {
  scaleControlValue.value = '100%';
  previewImage.style.transform = 'scale(1.00)';
  previewImage.style.filter = '';
  if (usedClass) {
    previewImage.classList.remove(usedClass);
  }
  effectLevel.classList.add('visually-hidden');
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


