const Scale = {
MAX: 100,
MIN: 0,
STEP: 25
};

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview');

const resetScale = () => {
scaleControlValue.value = '100%';
previewImage.style.transform = 'scale(0.1)';
};

scaleControlSmaller.addEventListener('click', () => {
  let scaleValue = parseInt(scaleControlValue.value) - Scale.STEP;

  if (scaleValue < Scale.MIN) {
    scaleValue = Scale.MIN;
  }

  scaleControlValue.value = scaleValue + '%';

  scaleValue = scaleValue / 100;
  previewImage.style.transform = `scale(${scaleValue})`;
});

scaleControlBigger.addEventListener('click', () => {
  let scaleValue = parseInt(scaleControlValue.value) + Scale.STEP;

  if (scaleValue > Scale.MAX) {
    scaleValue = Scale.MAX;
  }

  scaleControlValue.value = scaleValue + '%';
  scaleValue = scaleValue / 100;
  previewImage.style.transform = `scale(${scaleValue})`;
});
