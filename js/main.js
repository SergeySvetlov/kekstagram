// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomInteger = (min, max) => {
  if (min >= max) {
    return null;
  } return Math.floor((max - min) * Math.random() + min);
};

// Функция для проверки максимальной длины строки.
// Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const checkStringLength = (string, maxLength) => string.length <= maxLength;
