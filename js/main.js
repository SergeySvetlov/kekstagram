import {generatePhotoDescriptions} from './data.js';
import {renderPictures} from './render-min.js';
import './form.js';

const data = generatePhotoDescriptions();
renderPictures(data);
