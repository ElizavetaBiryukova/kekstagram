/* global noUiSlider:readonly */

import {
  previewImage
} from './scale.js';

const SettingsSlide = {
  CHROME: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
    FILTER: 'grayscale',
    EFFECT: 'effects__preview--chrome',
  },

  SEPIA: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
    FILTER: 'sepia',
    EFFECT: 'effects__preview--sepia',

  },

  MARVIN: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    START: 100,
    FILTER: 'invert',
    EFFECT: 'effects__preview--marvin',
    NAME: 'marvin',
  },

  PHOBOS: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    START: 3,
    FILTER: 'blur',
    EFFECT: 'effects__preview--phobos',
    NAME: 'phobos',
  },

  HEAT: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    START: 3,
    FILTER: 'brightness',
    EFFECT: 'effects__preview--heat',
  },

  NONE: {
    MIN: 0,
    MAX: 0.1,
    STEP: 0,
    START:0,
    FILTER: 'none',
    EFFECT: 'effects__preview--none',
  }
};

const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');
const effectRadioGroup = document.querySelector('.img-upload__effects');

const resetSettingEffects = () => {
  previewImage.style.filter = SettingsSlide.NONE.FILTER;
  previewImage.classList.remove(previewImage.classList[0]);
  previewImage.classList.add(SettingsSlide.NONE.EFFECT);
  effectLevel.classList.add('visually-hidden');
};

resetSettingEffects();

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  behaviour: 'snap',
  connect: [true, false],
  start: 80,
  step: 1,
});

effectRadioGroup.addEventListener('change', (evt) => {
  previewImage.classList.remove(previewImage.classList[0]);
  const sliderSetting = SettingsSlide[evt.target.value.toUpperCase()];
  previewImage.classList.add(sliderSetting.EFFECT);

  if (evt.target.value === SettingsSlide.NONE.FILTER) {

    effectLevel.classList.add('visually-hidden');

  } else {

    effectLevel.classList.remove('visually-hidden');
  }

  effectSlider.noUiSlider.updateOptions({
    range: {
      min: sliderSetting.MIN,
      max: sliderSetting.MAX,
    },
    start: sliderSetting.START,
    step: sliderSetting.STEP,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  effectSlider.noUiSlider.on('update', (value, handle) => {
    effectLevelValue.value = value[handle];
    if (evt.target.value === SettingsSlide.NONE.FILTER) {
      previewImage.style.filter = SettingsSlide.NONE.FILTER;

    } else {
      let units = '';
      switch (evt.target.value) {
        case SettingsSlide.MARVIN.NAME:
          units = '%';
          break;
        case SettingsSlide.PHOBOS.NAME:
          units = 'px';
          break;
      }
      previewImage.style.filter = `${sliderSetting.FILTER}(${effectLevelValue.value}${units})`;
    }
  });
});

export {resetSettingEffects};
