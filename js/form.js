import {sendData} from './api.js';
import {showError}  from './error.js';
import {closeModal} from './editor.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('.img-upload__submit');
const REGULAR = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'text__error'
});

function validateHashtags (value) {
  const hashtags = value.trim().toLowerCase().split(/\s+/);
  const conditionOne = () => hashtags.length <= 5;
  const conditionTwo = () => !!(hashtags.every((hashtag) => REGULAR.test(hashtag)) || value === '');
  const conditionThree = () => new Set(hashtags).size === hashtags.length;
  return !!((conditionOne() === true && conditionTwo() === true && conditionThree() === true));
}

pristine.addValidator(textHashtags, validateHashtags, 'некорректный набор хэштегов');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(() => {
        unblockSubmitButton();
        showSuccessMessage();
        closeModal();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
      );
    }
  });
};

export {setForm};
