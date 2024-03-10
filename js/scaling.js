const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

const getScaleValue = () => Number(scaleControlValue.value.split('').slice(0, -1).join(''));
function transform (scaleValue) {
  img.style.transform = `scale(${scaleValue/100})`;
}

const scaling = () => {
  scaleControlSmaller.addEventListener('click', () => {
    if (getScaleValue() > 25) {
      scaleControlValue.value = `${getScaleValue() - 25}%`;
      transform(getScaleValue());
    }
  });

  scaleControlBigger.addEventListener('click', () => {
    if (getScaleValue() < 100) {
      scaleControlValue.value = `${getScaleValue() + 25}%`;
      transform(getScaleValue());
    }
  });
};

export  {transform, scaling};
