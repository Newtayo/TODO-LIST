import render from './Modules/render.js';
import './index.css';
import arrangement from './Modules/displayTask.js';

import Activity from './Modules/addTask.js';

import edit from './assets/Edit.svg';

const editbtn = document.querySelectorAll('.edit');

editbtn.forEach((btn) => {
  btn.src = edit;
});

render();
arrangement();

const submission = document.getElementById('submission');

const newAction = new Activity();
submission.addEventListener('submit', (e) => {
  e.preventDefault();
  newAction.addTask();
});
