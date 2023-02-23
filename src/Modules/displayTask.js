import sortOutput from './sort.js';

import edit from '../assets/Edit.svg';

const container = document.querySelector('.container');

const tasklibrary = sortOutput();

const taskarrangment = (data) => {
  const taskholder = document.createElement('ul');
  taskholder.className = 'topMenu';
  taskholder.innerHTML = ` <input type="checkbox" name="status" id="status" />
    <h2 class="task"> ${data.description}</h2>
  <button type="submit" class="submitBtn editbt"><img  class ="edit" src=${edit}></button>`;
  container.append(taskholder);
};
const arrangement = () => {
  tasklibrary.forEach((element) => {
    taskarrangment(element);
  });
  const but = document.createElement('button');
  but.innerText = 'Clear all Completed';
  but.className = 'reset';
  but.setAttribute('type', 'submit');
  container.append(but);
};

export default arrangement;
