import { tasksorting } from './task.js';
import '../index.css';

const sortOutput = () => {
  const newTasklist = tasksorting();

  newTasklist.sort((firstTask, secondTask) => firstTask.index - secondTask.index);
  const holder = [];

  newTasklist.forEach((task) => {
    holder.push(task);
  });

  return holder;
};

export default sortOutput;