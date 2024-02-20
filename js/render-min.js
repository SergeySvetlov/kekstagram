import {onPictureClickHandler} from './render-full.js';

const picture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const renderPictures = (data) => {
  data.forEach(({url, likes, comments, description}) => {
    const newPicture = picture.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments.length;
    newPicture.addEventListener('click', onPictureClickHandler({url, likes, comments, description}));
    fragment.append(newPicture);
  });

  return picturesContainer.append(fragment);
};


export {renderPictures};
