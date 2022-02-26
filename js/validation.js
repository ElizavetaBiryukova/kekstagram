const hashtagsInput = document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');

commentText.addEventListener('input', () => {
  const valueComment = commentText.value.length;
  if (valueComment == valueComment.getAttribute('maxlength')) {
    commentText.setCustomValidity('Комментарии не должны превышать 140 символов');
  }
});
