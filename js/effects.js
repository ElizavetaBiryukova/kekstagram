import { previewImage } from './scale.js';

// const radioEffects = document.querySelector('.effects__radio');
const chromeEffect = document.querySelector('#effect-chrome');
// const sepiaEffect = document.querySelector('.effect-sepia');
// const marvinEffect = document.querySelector('.effect-marvin');
// const phobosEffect = document.querySelector('.effect-phobos');
// const heatEffect = document.querySelector('.effect-heat');
const noneEffect = document.querySelector('#effect-none');


// const chckedCheckbox = document.querySelector('input[]')
if (noneEffect.checked == true) {
previewImage.classList.add('effects__preview--none');
} if (chromeEffect.checked == true) {
previewImage.classList.add('effects__preview--chrome');
}
// checkbox.addEventListener('change', function () {
//   if ( this.checked ) {
//       console.log('checked');
//   } else console.log('unchecked');
// })

