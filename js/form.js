const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const imgUploadOverlay = body.querySelector('.img-upload__overlay');
const form = body.querySelector('.img-upload__form');
const uploadCancelButton = form.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');
const REGULAR = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

function showModal () {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
}
function closeModal () {
  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
  uploadFile.value = '';
}

function onEscKeydown (evt) {
  if (evt.keyCode === 27 && document.activeElement !== textHashtags && document.activeElement !== textDescription) {
    evt.preventDefault();
    closeModal();
  }
}

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

uploadFile.addEventListener('change', showModal);
uploadCancelButton.addEventListener('click', closeModal);
