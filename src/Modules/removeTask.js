import { updatingstorage } from './task.js';
let i = 0;
const bookremoval = (id, arr) => {
  const filtered = arr.filter((elem) => elem.index !== id);

  for (let i = 0; i < filtered.length ; i++)
  {

    filtered[i].index = i + "";
  }
  

  updatingstorage(filtered);
};

export default bookremoval;
