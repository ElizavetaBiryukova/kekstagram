/* global noUiSlider:readonly */

// import { previewImage } from './scale.js';

// const effectRadioGroup = document.querySelector('.img-upload__effects');
//

const Effects = {
  CHROME: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
  },
  SEPIA: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
  },
  MARVIN: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
  },
  PHOBOS: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
  },
  HEAT: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
  },
};

const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');

//Добавляет слайдер
effectLevelValue.value = 90;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 90,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectLevelValue.value = unencoded[handle];
});

const effects = {
none: () => {
  effectLevel.classList.add('.visual-hidden');
  return 'none';
},
chrome: () => {
  effectLevel.classList.remove('.visual-hidden');
  return `grayscale(${parseInt(effectLevelValue.value) * Effects.CHROME.STEP})`;
},
sepia: () => {
  effectLevel.classList.remove('.visual-hidden');
  return `sepia(${parseInt(effectLevelValue.value) * Effects.SEPIA.STEP}})`;
},
marvin: () => {
  effectLevel.classList.remove('.visual-hidden');
  return `invert(${parseInt(effectLevelValue.value) * Effects.MARVIN.STEP}})%`;
},
phobos: () => {
  effectLevel.classList.remove('.visual-hidden');
  return `blur(${parseInt(effectLevelValue.value) * Effects.PHOBOS.STEP * Effects.PHOBOS.MAX}})px`;
},
heat: () => {
  effectLevel.classList.remove('.visual-hidden');
  return `brightness(${parseInt(effectLevelValue.value) * Effects.HEAT.STEP * Effects.HEAT.MAX}})`;
},


// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.
};
