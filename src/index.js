import render from './Modules/render.js';
import './index.css';

import edit from './assets/Edit.svg';

const editbtn = document.querySelectorAll('.edit');

editbtn.forEach((btn) => {
  btn.src = edit;
});

render();
