import edit from '../assets/Edit.svg';
import { tasksorting } from './task.js';
import bookremoval from './removeTask.js';

const container = document.querySelector('.container');

const taskarrangment = (data) => {
  const taskholder = document.createElement('ul');
  taskholder.className = 'topMenu';
  taskholder.innerHTML = ` <input type="checkbox" name="status" id="status" />
    <h2 class="task"> ${data.description}</h2>
  <button type="submit" class="submitBtn editbt" id ="${data.index}"><img  class ="edit" alt ="edit" src=${edit}></button>`;

  container.append(taskholder);
};
const arrangement = (tasklibrary) => {
  tasklibrary = tasksorting();
  tasklibrary.forEach((element) => {
    taskarrangment(element);
  });
  const removeBtns = document.querySelectorAll('.editbt');

  removeBtns.forEach((remove) => remove.addEventListener('click', (e) => {
    if (e.target.id) {
      const reArray = tasksorting();
      bookremoval(e.target.id, reArray);
      document.getElementById(`${e.target.id}`).parentNode.className = 'hide';
    }
  }));
  const but = document.createElement('button');
  but.innerText = 'Clear all Completed';
  but.className = 'reset';
  but.setAttribute('type', 'submit');
  container.append(but);
};

export default arrangement;
