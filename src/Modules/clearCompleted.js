import { updatingstorage } from './task.js';
import sortOutput from './sort.js';

const clearButton = () => {
  const removeCompleted = document.querySelector('.reset');
  removeCompleted.addEventListener('click', () => {
    const taskstatus = document.querySelectorAll('.taskstatus');
    taskstatus.forEach((task) => {
      if (task.checked) {
        task.parentNode.remove();
      }
    });

    const afterClear = sortOutput();
    const filtered = afterClear.filter((elem) => elem.completed !== true);
    for (let i = 0; i < filtered.length; i += 1) {
      filtered[i].index = `${i}`;
    }

    updatingstorage(filtered);
  });
};
export default clearButton;