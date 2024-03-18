//import {generatePhotoDescriptions} from './data.js';
import {getData} from './api.js';
import {renderPictures} from './render-min.js';
import {showError}  from './error.js';
import './editor.js';

getData(renderPictures, showError);
