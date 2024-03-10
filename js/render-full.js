import {renderComments} from './render-comments.js';
import {showComments} from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const cancelButton = bigPicture.querySelector('#picture-cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const body = document.querySelector('body');

// Открытие окна
const openFullPicture = () => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  cancelButton.addEventListener('click', closeFullPicture);

};
// Закрытие окна
function closeFullPicture () {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
}

// Нажатиe на кнопку Esc
function onEscKeydown (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeFullPicture();
  }
}

// отрисовка большой фотки

const renderFullPicture = ({url, likes, comments, description}) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
  renderComments(comments);
};

// Функция для обработчика клика по миниатюре фотографии
const onPictureClickHandler = ({url, likes, comments, description}) => function () {
  renderFullPicture({url, likes, comments, description});
  openFullPicture();
  showComments();
};

export{onPictureClickHandler};
