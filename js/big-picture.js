const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closingBigPicture = bigPicture.querySelector('.big-picture__cancel');

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');

const commentsList = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const closeBigPicture = () => {
  closingBigPicture.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsList.innerHTML = '';
  });
};

//Клонирует комментарий
const createComment = (comment) => {
  const commentElement = commentsTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
};

//Заполняет комментариями всю разметку для них
const createComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach(comment => {
    commentsFragment.appendChild(createComment(comment));
  });

  commentsList.appendChild(commentsFragment);
};

//Показыват фотографию в большом размере
const showBigPicture = (picture) => {

  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  createComments(picture.comments);
  body.classList.add('modal-open');
  closeBigPicture();
  bigPicture.classList.remove('hidden');
};

export {
  showBigPicture,
  body
};
