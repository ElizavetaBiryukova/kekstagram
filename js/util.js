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

getRandomInt(1, 10);

//Проверка строки
const stringCount = (text, num) => {
  return text.length <= num;
};

stringCount('Проверочное сообщение', 140);

//Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length -1)];
};

export { getRandomInt, getRandomElementArr };
