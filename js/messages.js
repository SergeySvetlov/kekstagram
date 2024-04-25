const body = document.querySelector('body');
const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;
const errorMessage = errorTemplate.querySelector('.error').cloneNode(true);
const successMessage = successTemplate.querySelector('.success').cloneNode(true);
const successInner = successMessage.querySelector('.success__inner');
const errorInner = errorMessage.querySelector('.error__inner');
const errorButton = errorMessage.querySelector('.error__button');
const successButton = successMessage.querySelector('.success__button');

errorButton.onclick = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onEscKeydown);
};

successButton.onclick = () => {
  successMessage.remove();
  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if (evt.keyCode === 27) {
    successMessage.remove();
    errorMessage.remove();
  }
  document.removeEventListener('keydown', onEscKeydown);
}

function closeMessage (message, inner) {
  function onWindowClickHandler (evt) {
    if(!(evt.target === inner)) {
      message.remove();
    }
    window.removeEventListener('click', onWindowClickHandler);
  }
  window.addEventListener('click', onWindowClickHandler);
}

const showErrorMessage = () => {
  document.addEventListener('keydown', onEscKeydown);
  errorMessage.style.zIndex = '1000';
  body.append(errorMessage);
  closeMessage(errorMessage, errorInner);
};

const showSuccessMessage = () => {
  document.addEventListener('keydown', onEscKeydown);
  successMessage.style.zIndex = '1000';
  body.append(successMessage);
  closeMessage(successMessage, successInner);
};

export{showErrorMessage, showSuccessMessage};
