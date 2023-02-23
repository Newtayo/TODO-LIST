class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const updatingstorage = (id) => {
  localStorage.setItem('links', JSON.stringify(id));
};

let tasklist = [];
const tasksorting = () => {
  if (localStorage.getItem('links')) {
    tasklist = JSON.parse(localStorage.getItem('links'));
  } else {
    const tasklist1 = new Tasks('wash the dishes', true, 2);
    const tasklist2 = new Tasks('complete the To Do List Project', false, 1);
    const tasklist3 = new Tasks('complete the To Do List Project', false, 1);
    tasklist = [tasklist1, tasklist2, tasklist3, tasklist2, tasklist1];
  }
  updatingstorage(tasklist);
  return tasklist;
};

// const bookremoval = (id) => {
//   const filtered = bookcollection.filter((elem) => elem.id !== id);
//   bookcollection = filtered;
//   updatingstorage();
//   return this;
// };
export { Tasks, tasksorting, updatingstorage };