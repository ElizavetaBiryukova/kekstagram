import {
  createPhotos
} from './preview.js';
import {
  shuffleArray,
  debounce
} from './util.js';

const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

const imgFilter = document.querySelector('.img-filters');
let photos = [];

const removeActiveClass = () => {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
};

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
};

const filters = {
  'filter-default': () => {
    createPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
  },
  'filter-random': () => {
    createPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW_LOAD));

  },
  'filter-discussed': () => {
    createPhotos(photos.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    }));
  },
};

const onSuccess = (data) => {
  imgFilter.classList.remove('img-filters--inactive');
  photos = data.slice();
  createPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
};

const onFilterClick = debounce((evt) => {

  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active');
    filters[evt.target.id]();
  }
});

imgFilter.addEventListener('click', onFilterClick);

export {
  onSuccess
};
