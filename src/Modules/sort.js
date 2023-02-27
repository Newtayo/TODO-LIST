import { tasksorting, updatingstorage } from './task.js';
import '../index.css';

const sortOutput = (newTasklist) => {
  newTasklist = tasksorting();

  newTasklist.sort((firstTask, secondTask) => firstTask.index - secondTask.index);
  const holder = [];

  newTasklist.forEach((task) => {
   
    holder.push(task);
  });
  updatingstorage(holder);
  return holder;
};

export default sortOutput;