import {generatePhotoDescriptions} from './data.js';

const picture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const photoDescriptions = generatePhotoDescriptions();
const fragment = document.createDocumentFragment();

photoDescriptions.forEach(PhotoDescription => {
  const newPicture = picture.cloneNode(true);
  const img = newPicture.querySelector('.picture__img');
  const lickes = newPicture.querySelector('.picture__likes');
  const comments = newPicture.querySelector('.picture__comments');
  img.src = PhotoDescription.url;
  lickes.textContent = PhotoDescription.likes;
  comments.textContent = PhotoDescription.comments.length;
  fragment.append(newPicture);
});

const renderPictures = () => picturesContainer.append(fragment);


export {renderPictures};
