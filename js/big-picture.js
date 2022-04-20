const COMENT_LOAD_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closingBigPicture = bigPicture.querySelector('.big-picture__cancel');

// document.querySelector('.social__comment-count').classList.add('hidden');
// document.querySelector('.comments-loader').classList.add('hidden');
let commentsLoaded = [];

const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
let commentsCount = COMENT_LOAD_STEP;

const commentsList = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closingBigPicture.addEventListener('click', closeBigPicture);
  commentsList.innerHTML = '';
  commentsCount = COMENT_LOAD_STEP;
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

  commentsCount = (comments.length < COMENT_LOAD_STEP) ? comments.length : commentsCount;
  commentsLoaded = comments.slice(0, commentsCount);

  commentsList.innerHTML = '';
  commentCount.textContent = `${commentsLoaded.length} из ${comments.length} комментариев`;


  let commentsFragment = document.createDocumentFragment();
  comments.forEach(comment => {
    commentsFragment.appendChild(createComment(comment));
  });

  commentsList.appendChild(commentsFragment);

  if (comments.length > COMENT_LOAD_STEP && commentsLoaded.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick, {once: true});

  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMENT_LOAD_STEP;
};

//Показыват фотографию в большом размере
const showBigPicture = (picture) => {

  commentsCount = COMENT_LOAD_STEP;
  commentsLoaded = [];
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  // bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
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
