import {scaling, removeScaling} from './scaling.js';
import {enableFilters, effectsNone} from './slider.js';

const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const imgUploadOverlay = body.querySelector('.img-upload__overlay');
const form = body.querySelector('.img-upload__form');
const uploadCancelButton = form.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

function showModal () {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  scaling();
  enableFilters();
}
function closeModal () {
  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
  uploadFile.value = '';
  effectsNone();
  removeScaling();
}

function onEscKeydown (evt) {
  if (evt.keyCode === 27 && document.activeElement !== textHashtags && document.activeElement !== textDescription && document.querySelector('.error') === null) {
    evt.preventDefault();
    closeModal();
  }
}

const setUploadFile = () => {
  if (uploadFile === null) {
    return;
  }
  uploadFile.addEventListener('change', showModal);
  uploadCancelButton.addEventListener('click', closeModal);
};

export {closeModal, setUploadFile};
