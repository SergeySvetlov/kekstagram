import {transform, scaling} from './scaling.js';
import './slider.js';
import './form.js';

const DEFOUL_SCALE_VALUE = 100;

const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const imgUploadOverlay = body.querySelector('.img-upload__overlay');
const form = body.querySelector('.img-upload__form');
const uploadCancelButton = form.querySelector('#upload-cancel');

function showModal () {
  transform(DEFOUL_SCALE_VALUE);
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  scaling();
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

uploadFile.addEventListener('change', showModal);
uploadCancelButton.addEventListener('click', closeModal);
