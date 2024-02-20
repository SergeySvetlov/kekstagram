import {getRandomInteger, getUniqueInteger} from './util.js';

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

const createPhotoDescription = (_,i) => ({
  id: i+1,
  url: `photos/${i+1}.jpg`,
  description: 'фотография',
  likes: getRandomInteger(15,200),
  comments: generateRandomComments(1, 20),
});

//Создать массив описаний фотографий

const generatePhotoDescriptions = () => Array.from({length: QUANTITY_OF_DISCRIPTIONS}, createPhotoDescription);

export {generatePhotoDescriptions};
