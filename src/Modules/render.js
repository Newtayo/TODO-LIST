import reload from '../assets/Refresh_icon.png';
import '../index.css';
import enter from '../assets/Enter.svg';
import Activity from './addTask.js';

import arrangement from './displayTask.js';
import sortOutput from './sort.js';

const container = document.querySelector('.container');

const render = () => {
  const header = document.createElement('ul');
  header.className = 'topMenu';
  header.innerHTML = `<h1 class="heading"> Today's To Do</h1>
    <button type="submit" class="submitBtn"><img  id ="reload" alt="reload" src="${reload}" ></button>`;

  const entry = document.createElement('form');
  entry.className = 'topMenu';
  entry.id = 'submission';
  entry.innerHTML = ` <input type="text" name="add" placeholder="Add to your List..." maxlength="30" id="addTolist" />
  <button type="submit" class="submitBtn" id ="hope"> <img  id ="addBtn" alt="enter" src="${enter}" ></button>`;

  container.append(header);
  container.append(entry);
  const submission = document.getElementById('submission');

  const newAction = new Activity();
  submission.addEventListener('submit', (e) => {
    e.preventDefault();
    newAction.addTask();
    render();
  });
  const modifyArray = sortOutput();
  arrangement(modifyArray);
};

export default render;