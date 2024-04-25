//import {generatePhotoDescriptions} from './data.js';
import {getData} from './api.js';
import {setFileChooser} from './file.js';
import {renderPictures} from './render-min.js';
import {showError}  from './error.js';
import {setUploadFile} from './editor.js';
import {setForm} from './form.js';

setFileChooser();
setUploadFile();
getData(renderPictures, showError);
setForm();
