const DEF_VISIBLE_COMMENTS_COUNT = 5;

const socialCommentsList = document.querySelector('.social__comments');
const commentsLoaderButton = document.querySelector('.social__comments-loader');
const visibleComments = document.querySelector('.visible-comments-count');

const collectHiddenComments = () => socialCommentsList.querySelectorAll('.social__comment.hidden');

const changeVisibleCommentsCount = () => {
  const commentsCount = Number(document.querySelector('.comments-count').textContent);
  const visibleCommentsCount = commentsCount - collectHiddenComments().length;
  visibleComments.textContent = '';
  visibleComments.append(visibleCommentsCount);
};

function hideCommentsLoaderButton () {
  const hiddenComments = collectHiddenComments();
  if (hiddenComments.length === 0) {
    commentsLoaderButton.classList.add('hidden');
  }
}

const onCommentsLoaderClickHandler = () => {
  const hiddenComments = collectHiddenComments();
  hiddenComments.forEach((hiddenComment, i) => {
    if (i < DEF_VISIBLE_COMMENTS_COUNT) {
      hiddenComment.classList.remove('hidden');
    }
  });
  hideCommentsLoaderButton();
  changeVisibleCommentsCount();
};

const showComments = () => {
  commentsLoaderButton.classList.remove('hidden');
  const socialComments = socialCommentsList.querySelectorAll('.social__comment');
  socialComments.forEach((socialComment, i) => {
    if (i >= DEF_VISIBLE_COMMENTS_COUNT) {
      socialComment.classList.add('hidden');
    }
  });
  changeVisibleCommentsCount();
  commentsLoaderButton.addEventListener('click', onCommentsLoaderClickHandler);
  hideCommentsLoaderButton();
};

export {showComments};
