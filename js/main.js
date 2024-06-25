//import {generatePhotoDescriptions} from './data.js';
import {getData} from './api.js';
import {setFileChooser} from './file.js';
import {setRenderPictures} from './filters.js';
import {showError}  from './error.js';
import {setUploadFile} from './editor.js';
import {setForm} from './form.js';
import './filters.js';

setFileChooser();
setUploadFile();
getData(setRenderPictures, showError);
setForm();
