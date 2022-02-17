/* global noUiSlider:readonly */

// import { previewImage } from './scale.js';

// const effectRadioGroup = document.querySelector('.img-upload__effects');
// const effectLevel = document.querySelector('.img-upload__effect-level');

const effectLevelValue = document.querySelector('.effect-level__value');

const effectSlider = document.querySelector('.effect-level__slider');

effectLevelValue.value = 80;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectLevelValue.value = unencoded[handle];
});

// effectSlider.noUiSlider.destroy();
