const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Что то пошло нетак, обновите страницу. Ошибка: ${response.status}`);
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => onFail(err.message));
};
/*
const sendData = (onSuccess, onFail, data) => {
  fetch(
    'https://26.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      type: 'multipart/form-data',
      body: data,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      onSuccess();
    })
    .catch((err) => onFail(err.message));
};*/
// Другой синтаксис написания той же функции с помощью операторов async await
const sendData = async (onSuccess, onFail, data) => {
  try  {
    const response = await fetch(
      'https://26.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        type: 'multipart/form-data',
        body: data,
      });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    onSuccess();
  } catch(err) {
    onFail(err.message);
  }
};

export {getData, sendData};
