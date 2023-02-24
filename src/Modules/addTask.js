import { Tasks, tasksorting, updatingstorage } from './task.js';

const container = document.querySelector('.container');

export default class Activity {
  addTask() {
    const submission = document.getElementById('submission');
    const newArray = tasksorting();
    const List = new Tasks();
    List.description = submission.elements.addTolist.value;
    List.index = `${newArray.length + 1}`;
    List.completed = true;

    newArray.push(List);

    updatingstorage(newArray);
    container.innerHTML = '';

    // arrangement(newArray);
    // removeTask();

    return this;
  }
}
