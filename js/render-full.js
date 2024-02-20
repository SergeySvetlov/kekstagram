import {renderComments} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const cancelButton = bigPicture.querySelector('#picture-cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const body = document.querySelector('body');

//Обработчик закрытия окна с большой фотографией

const closeBigPictureHandler = () => {
  cancelButton.onclick = function () {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  };
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
    }
  });

};

// Обработчик нажатия на миниатюру фотографии

const onPictureClickHandler = ({url, likes, comments, description}) => () => {
  bigPicture.classList.remove('hidden');
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
  renderComments(comments);
  body.classList.add('modal-open');
  closeBigPictureHandler();
};

export{onPictureClickHandler};
