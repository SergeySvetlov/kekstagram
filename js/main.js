import {generatePhotoDescriptions} from './data.js';
import {renderPictures} from './render-min.js';

const data = generatePhotoDescriptions();
renderPictures(data);
