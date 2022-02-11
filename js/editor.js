import {body} from './big-picture.js';

const Keys = { ESCAPE: 'Escape', ESC: 'Esc' };
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadClose = document.querySelector('#upload-cancel');

//Появляется окно редактирования
uploadInput.addEventListener('change', () => {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

//Закрытие окна редактирования
const closeUploadModal = () => {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
};

//Закрытие окна редактирования на кнопку "крестик"
uploadClose.addEventListener('click',() => {
  closeUploadModal();
});

//Закрытие окна на кнопку ESCAPE
document.addEventListener('keydown', (evt) => {
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    closeUploadModal();
  }
});

