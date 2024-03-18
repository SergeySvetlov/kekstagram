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

export {getData};
