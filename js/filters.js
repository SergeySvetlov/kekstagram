import { renderPictures } from './render-min.js';
import { debounce } from './util.js';

const filtersList = document.querySelector('.img-filters');
const defoultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');


const PICTURES__COUNT = 25;
const RANDOM__PICTURES__COUNT = 10;

const comparePictures = (imgA, imgB) => imgB.likes - imgA.likes;

const showDiscussedPictures = (data) => () => {
  discussedButton.classList.add('img-filters__button--active');
  defoultButton.classList.remove('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  const sortedPictures = data.slice().sort(comparePictures).slice(0, PICTURES__COUNT);
  renderPictures(sortedPictures);
};

const showDefoultPictures = (data) => () => {
  discussedButton.classList.remove('img-filters__button--active');
  defoultButton.classList.add('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  const sortedPictures = data.slice(0, PICTURES__COUNT);
  renderPictures(sortedPictures);
};

const showRandomPictures = (data) => () => {
  discussedButton.classList.remove('img-filters__button--active');
  defoultButton.classList.remove('img-filters__button--active');
  randomButton.classList.add('img-filters__button--active');
  const sortedPictures = data.slice().sort(() => Math.random() - Math.random()).slice(0, RANDOM__PICTURES__COUNT);
  renderPictures(sortedPictures);
};

const setRenderPictures = (data) => {
  renderPictures(data);
  discussedButton.addEventListener('click', debounce(showDiscussedPictures(data)));
  defoultButton.addEventListener('click', debounce(showDefoultPictures(data)));
  randomButton.addEventListener('click', debounce(showRandomPictures(data)));
  filtersList.classList.remove('img-filters--inactive');
};

export {setRenderPictures};
