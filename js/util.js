const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc'
};

//Случайное число
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min +1)) + min;
};

//Проверка строки
const stringCount = (text, num) => {
  return text.length <= num;
};

//Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length -1)];
};

export { getRandomInt, getRandomElementArr, stringCount, Keys };

