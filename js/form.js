const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');
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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
