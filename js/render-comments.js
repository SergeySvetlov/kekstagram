const socialComments = document.querySelector('.social__comments');

const renderComment = ({avatar, name, message}) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  const img = document.createElement('img');
  img.classList.add('social__picture');
  const p = document.createElement('p');
  p.classList.add('social__text');
  li.append(img);
  li.append(p);
  img.src = avatar;
  img.alt = name;
  img.style.width = '35';
  img.style.heigth = '35';
  p.textContent = message;
  socialComments.append(li);
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  comments.forEach(({avatar, name, message}) => {
    renderComment({avatar, name, message});
  });
};

export {renderComments};
