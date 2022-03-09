import {
  Keys
} from './util.js';

const MAX_LENGTH_HASHTAG = 20;
const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 140;
const regExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

const hashtagsInput = document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');

hashtagsInput.addEventListener('input', () => {
  hashtagsInput.setCustomValidity('');

  let inputText = hashtagsInput.value.toLowerCase().trim();

  if (!inputText) {
    return;
  }

  const arrayHashtags = inputText.split(' ');

  if (arrayHashtags.length === 0) {
    return;
  }

  arrayHashtags.forEach(str => {
    if (str[0] !== '#') {
      hashtagsInput.setCustomValidity('Хеш-тег должен начинаться с #');
    }
    if (str.slice(1).search(regExp) == -1) {
      hashtagsInput.setCustomValidity('Строка после решётки должна состоять из букв и чисел, перед # стоять пробел');
    }
    if (str == '#') {
      hashtagsInput.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
    }
    if (str.length > MAX_LENGTH_HASHTAG) {
      hashtagsInput.setCustomValidity('Максимальная длина хештега 20 символов');
    }
  });


  if (arrayHashtags.length > MAX_HASHTAGS) {
    hashtagsInput.setCustomValidity('Нельзя указывать больше 5 хеш-тегов');
  }


  const countItems = arrayHashtags.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  const arrayCountItems = Object.values(countItems);

  if (arrayCountItems[0] > 1) {
    hashtagsInput.setCustomValidity('Один и тот же хеш-тег не может быть использован дважды');
  }
});

commentText.addEventListener('input', () => {

  const commentFieldText = commentText.value;

  if (commentFieldText.length > MAX_SYMBOLS) {
    commentText.setCustomValidity('Длинна комментария не может составлять больше 140 символов');
  } else {
    commentText.setCustomValidity('');
  }
});

const onEscDown = (evt) => {
  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

hashtagsInput.addEventListener('keydown', onEscDown);
commentText.addEventListener('keydown', onEscDown);
