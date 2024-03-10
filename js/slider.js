const slider = document.querySelector('.effect-level__slider');
const img = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const radioButtons = effectsList.querySelectorAll('input[type="radio"]');

const effectNameList = ['none','chrome', 'sepia', 'marvin', 'phobos', 'heat'];

noUiSlider.create(slider, {
  start: 0,
  step: 0.1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1
  }
});

const effectSettings = {
  none: {
    slider: {
      start: 0
    }
  },
  chrome: {
    slider: {
      start: 0,
      step: 0.1,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 1
      }
    },
    filter: 'grayscale',
    units: ''
  },
  sepia: {
    slider: {
      start: 0,
      step: 0.1,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 1
      }
    },
    filter: 'sepia',
    units: ''
  },
  marvin: {
    slider: {
      start: 0,
      step: 1,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 100
      }
    },
    filter: 'invert',
    units: '%'
  },
  phobos: {
    slider: {
      start: 0,
      step: 0.1,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 3
      }
    },
    filter: 'blur',
    units: 'px'
  },
  heat: {
    slider: {
      start: 1,
      step: 0.1,
      connect: 'lower',
      range: {
        'min': 1,
        'max': 3
      }
    },
    filter: 'brightness',
    units: ''
  }
};

const deleteImgClass = () => {
  img.className = '';
};

radioButtons.forEach((radio, i) => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      deleteImgClass();
      img.classList.add(`effects__preview--${effectNameList[i]}`);
      slider.classList.remove('hidden');
      slider.noUiSlider.updateOptions(effectSettings[effectNameList[i]].slider);
    }
    if (img.classList.contains('effects__preview--none')) {
      slider.classList.add('hidden');
    }
  });
});


const updateEffect = () => {
  img.style.filter = 'none';
  const checkedEffect = document.querySelector('input[type="radio"]:checked').value;
  const checkedSettings = effectSettings[`${checkedEffect}`];
  if (checkedSettings) {
    img.style.filter = `${checkedSettings.filter}(${slider.noUiSlider.get()}${checkedSettings.units})`;
  }
};

slider.noUiSlider.on('update', updateEffect);

