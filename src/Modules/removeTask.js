import { updatingstorage } from './task.js';

const bookremoval = (id, arr) => {
  const filtered = arr.filter((elem) => elem.index !== id);

  for (let i = 0; i < filtered.length; i += 1) {
    filtered[i].index = `${i}`;
  }

  updatingstorage(filtered);
};

export default bookremoval;
