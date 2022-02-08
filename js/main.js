import {
  getRandomInt,
  getRandomElementArr
} from './util';

const PHOTO_COUNT = 25;

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 1,
  MAX: 15,
};

const photos = [];

const description = [
  'Старое фото из архивов',
  'Просто так',
  'Селфи',
  'Пейзаж',
];

const name = [
  'Лиза',
  'Оля',
  'Игорь',
  'Петя',
  'Надя',
  'Лена',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const addComments = () => {
  const comment = [];
  for (let i = 0; i < getRandomInt(Comments.MIN, Comments.MAX); i++) {
    comment.push({
      id: getRandomInt(0, 1000),
      avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
      message: getRandomElementArr(message),
      name: getRandomElementArr(name),
    });
  }
};


const addPhoto = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i,
      url: 'photos' + (i + 1) + '.jpg',
      description: getRandomElementArr(description),
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: addComments(),
    });
  }
};

addPhoto();
