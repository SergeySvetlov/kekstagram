// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomInteger = (min, max) => {
  if (min >= max) {
    return null;
  } return Math.floor((max - min) * Math.random() + min);
};

// Функция для проверки максимальной длины строки.
// Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const checkStringLength = (string, maxLength) => string.length <= maxLength;

//Создать неповторяющееся случайное целое число

const uniqueIntegers = [];

const getUniqueInteger = (min, max) => {
  let newInteger;
  do {
    newInteger = getRandomInteger(min, max);
  } while (uniqueIntegers.includes(newInteger));
  uniqueIntegers.push(newInteger);
  return newInteger;
};

const QUANTITY_OF_DISCRIPTIONS = 25;

//Массив предложений

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Массив имён

const NAMES = [ 'Олег','Ольга','Сергей','Магомед','Гульнара','Алексей','Тимур','Ксения'];

//Cоздать случайный коммент
const createRandomComment = () => ({
  id: getUniqueInteger(0, 999),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

//Список случайных комментов

const generateRandomComments = (min, max) => {
  const randomComments = [];
  const quantity = getRandomInteger(min, max);
  for (let i = 0; i <= quantity; i++) {
    randomComments.push(createRandomComment());
  }
  return randomComments;
};

//Создать описание фотографии

const createPhotoDescription = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: 'фотография',
  likes: getRandomInteger(15,200),
  comments: generateRandomComments(1, 20),
});

//Создать массив описаний фотографий

const generatePhotoDescriptions = () => {
  const randomPhotoDescriptions = [];
  for (let i = 1; i <= QUANTITY_OF_DISCRIPTIONS; i++) {
    randomPhotoDescriptions.push(createPhotoDescription(i));
  }
  return randomPhotoDescriptions;
};
