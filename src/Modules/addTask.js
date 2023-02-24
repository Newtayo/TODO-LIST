import { Tasks, updatingstorage } from './task.js';
import sortOutput from './sort.js';

const container = document.querySelector('.container');

export default class Activity {
  addTask() {
    const submission = document.getElementById('submission');
    const newArray = sortOutput();
    const List = new Tasks();
    List.description = submission.elements.addTolist.value;
    List.index = `${newArray.length}`;
    List.completed = false;

    newArray.push(List);

    updatingstorage(newArray);
    container.innerHTML = '';

    // arrangement(newArray);
    // removeTask();

    return this;
  }
}
