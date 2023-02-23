import reload from '../assets/Refresh_icon.png';
import '../index.css';
import enter from '../assets/Enter.svg';

const container = document.querySelector('.container');

const render = () => {
  const header = document.createElement('ul');
  header.className = 'topMenu';
  header.innerHTML = `<h1 class="heading"> Today's To Do</h1>
    <button type="submit" class="submitBtn"><img  id ="reload" src="${reload}" ></button>`;

  const entry = document.createElement('ul');
  entry.className = 'topMenu';
  entry.innerHTML = ` <input type="text" name="add" placeholder="Add to your List..." maxlength="30" id="addTolist" />
  <button type="submit" class="submitBtn"> <img  id ="addBtn" src="${enter}" ></button>`;

  container.append(header);
  container.append(entry);
};

export default render;