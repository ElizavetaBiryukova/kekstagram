const COMMENT_LOAD_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closingBigPicture = bigPicture.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
let commentsLoaded = [];
let commentsCount = COMMENT_LOAD_STEP;

//Закрытие фотографии
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closingBigPicture.addEventListener('click', closeBigPicture);
  commentsList.innerHTML = '';
  commentsCount = COMMENT_LOAD_STEP;
  commentsLoaded = [];

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

  const onCommentsLoaderClick = () => {
    createComments(comments);
  };

  commentsCount = (comments.length < COMMENT_LOAD_STEP) ? comments.length : commentsCount;
  commentsLoaded = comments.slice(0, commentsCount);

  commentsList.innerHTML = '';
  commentCount.textContent = `${commentsLoaded.length} из ${comments.length} комментариев`;

  let commentsFragment = document.createDocumentFragment();
  commentsLoaded.forEach(comment => {
    commentsFragment.appendChild(createComment(comment));
  });

  commentsList.appendChild(commentsFragment);

  if (comments.length > COMMENT_LOAD_STEP && commentsLoaded.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick, {once: true});

  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMMENT_LOAD_STEP;
};

//Показыват фотографию в большом размере
const showBigPicture = (picture) => {
  commentsCount = COMMENT_LOAD_STEP;
  commentsLoaded = [];
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  closingBigPicture.addEventListener('click', closeBigPicture);
  bigPicture.classList.remove('hidden');
  createComments(picture.comments.slice());
};

export {
  showBigPicture,
  body
};
