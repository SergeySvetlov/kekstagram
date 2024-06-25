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

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {getRandomInteger, getUniqueInteger, checkStringLength, debounce};
