/* global noUiSlider:readonly */

import { previewImage } from './scale.js';

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
};

const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');
const effectRadioGroup = document.querySelector('.img-upload__effects');

effectLevel.classList.add('visually-hidden');

let usedClass = '';

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${Math.floor(effectLevelValue.value, 10)}%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;
  },
};

// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.

const onEffectRadioGroupClick = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (!usedClass) {
      previewImage.classList.remove(usedClass);
    }
    effectSlider.noUiSlider.set(100);
    let currentClass = evt.target.classList[1];
    usedClass = currentClass;

    previewImage.classList.add(currentClass);
    previewImage.style.filter = effects[currentClass.replace('effects__preview--', '')]();
  }
};

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick);

//Добавляет слайдер

noUiSlider.create(effectSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
});


effectSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectSlider.noUiSlider.get();
  previewImage.style.filter = effects[usedClass.replace('effects__preview--', '')]();
});

export { effectLevel, usedClass };
