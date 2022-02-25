const Scale = {
MAX: 100,
MIN: 0,
STEP: 5
};

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

const typingScaleValue = (scaleValue) => {
  scaleControlValue.value = scaleValue + '%';
  previewImage.style.transform = `scale(${scaleValue / 100})`;
};

scaleControlSmaller.addEventListener('click', () => {
  let scaleValue = parseInt(scaleControlValue.value, 10) - Scale.STEP;

  if (scaleValue < Scale.MIN) {
    scaleValue = Scale.MIN;
  }

  typingScaleValue(scaleValue);
});

scaleControlBigger.addEventListener('click', () => {
  let scaleValue = parseInt(scaleControlValue.value, 10) + Scale.STEP;

  if (scaleValue > Scale.MAX) {
    scaleValue = Scale.MAX;
  }

  typingScaleValue(scaleValue);
});

const resetSettingScal = () => {
  scaleControlValue.value = '100%';
  previewImage.style.transform = 'scale(1.00)';
};

export { previewImage, resetSettingScal };
