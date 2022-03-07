const regExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

const hashtagsInput = document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');

hashtagsInput.addEventListener('input', () => {
  hashtagsInput.setCustomValidity('');

  let inputText = hashtagsInput.value.toLowerCase().trim();

  const arrayHashtags = inputText.split(' ');

  arrayHashtags.forEach(str => {
    if (str[0] !== '#') {
      hashtagsInput.setCustomValidity('Хеш-тег должен начинаться с #');
    }
    if (str == '#') {
      hashtagsInput.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
    }
  });

  if (inputText.search(regExp) == -1) {
    hashtagsInput.setCustomValidity('Строка после решётки должна состоять из букв и чисел');
  }

});
