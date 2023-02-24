import edit from '../assets/Edit.svg';
import basket from '../assets/delete-button.svg';
import { updatingstorage } from './task.js';
import bookremoval from './removeTask.js';
import sortOutput from './sort.js';

import taskUpdate from './checkbox.js';
import clearButton from './clearCompleted.js';

const container = document.querySelector('.container');

const taskarrangment = (data) => {
  const taskholder = document.createElement('ul');
  taskholder.className = 'topMenu';
  taskholder.innerHTML = ` <input type="checkbox" name="status" id=s${data.index} class ="taskstatus status"  />
  <input class ="task" type="task" name="status" id="status" value="${data.description}" readonly />
  
  <button type="submit" class="submitBtn editbt" id ="${data.index}"><img  class ="edit" alt ="edit" src=${edit}></button>`;

  container.append(taskholder);
};
const arrangement = (tasklibrary) => {
  tasklibrary = sortOutput();
  tasklibrary.forEach((element) => {
    taskarrangment(element);
  });
  const removeBtns = document.querySelectorAll('.editbt');

  removeBtns.forEach((remove) => remove.addEventListener('click', (e) => {
    if (e.target.id) {
      const focusEdit = document.getElementById(`${e.target.id}`).parentNode.firstElementChild.nextElementSibling;
      focusEdit.focus();
      focusEdit.removeAttribute('readOnly');

      focusEdit.addEventListener('focusout', () => {
        const editArray = sortOutput();

        const updateObject = editArray.findIndex(((elem) => elem.index === e.target.id));

        editArray[updateObject].description = focusEdit.value;
        updatingstorage(editArray);
      });

      const deletebtn = document.getElementById(`${e.target.id}`).parentNode.lastElementChild;
      deletebtn.firstElementChild.src = basket;

      deletebtn.addEventListener('click', () => {
        const reArray = sortOutput();
        bookremoval(e.target.id, reArray);
        document.getElementById(`${e.target.id}`).parentNode.className = 'hide';
      });
    }
  }));
  taskUpdate();

  const but = document.createElement('button');
  but.innerText = 'Clear all Completed';
  but.className = 'reset';
  but.setAttribute('type', 'submit');
  container.append(but);
  clearButton();
};

export default arrangement;
