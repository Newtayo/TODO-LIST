import arrangement from './displayTask.js';

import { Tasks, tasksorting, updatingstorage } from './task.js';

import render from './render.js';

const container = document.querySelector('.container');

export default class Activity {
  addTask() {
    const submission = document.getElementById('submission');
    const List = new Tasks();
    List.description = submission.elements.addTolist.value;
    List.index = 1;
    List.completed = true;

    const newArray = tasksorting();
    newArray.push(List);

    updatingstorage(newArray);
    container.innerHTML = '';
    render();
    arrangement(newArray);

    return this;
  }
}
