class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const tasksorting = () => {
  let tasklist = [];
  const tasklist1 = new Tasks('wash the dishes', true, 2);
  const tasklist2 = new Tasks('complete the To Do List Project', false, 1);
  tasklist = [tasklist1, tasklist2];
  return tasklist;
};
export { Tasks, tasksorting };