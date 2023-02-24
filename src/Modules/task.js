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
    tasklist = [];
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