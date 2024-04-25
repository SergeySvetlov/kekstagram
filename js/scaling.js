const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

const DEFOUL_SCALE_VALUE = 100;

const getScaleValue = () => Number(scaleControlValue.value.split('').slice(0, -1).join(''));
const transform = (scaleValue) => {
  img.style.transform = `scale(${scaleValue/100})`;
};

const scaleControlSmallerHandler = () => {
  if (getScaleValue() > 25) {
    scaleControlValue.value = `${getScaleValue() - 25}%`;
    transform(getScaleValue());
  }
};

const scaleControlBiggerHandler = () => {
  if (getScaleValue() < 100) {
    scaleControlValue.value = `${getScaleValue() + 25}%`;
    transform(getScaleValue());
  }
};

const scaling = () => {
  transform(DEFOUL_SCALE_VALUE);
  scaleControlSmaller.addEventListener('click', scaleControlSmallerHandler);
  scaleControlBigger.addEventListener('click', scaleControlBiggerHandler);
};

const removeScaling = () => {
  scaleControlSmaller.removeEventListener('click', scaleControlSmallerHandler);
  scaleControlBigger.removeEventListener('click', scaleControlBiggerHandler);
};

export  {scaling, removeScaling};
