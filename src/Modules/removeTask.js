import { updatingstorage } from './task.js';

const bookremoval = (id, arr) => {
  const filtered = arr.filter((elem) => elem.index !== id);

  updatingstorage(filtered);
};

export default bookremoval;
