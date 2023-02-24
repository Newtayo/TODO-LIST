import sortOutput from "./sort";
import { updatingstorage } from "./task";

const taskUpdate =() => {
   const taskstatus = document.querySelectorAll('.taskstatus');
    taskstatus.forEach((task) =>{
       task.addEventListener('change',(t)=>{
        const taskId = document.getElementById(`${t.target.id}`).parentNode.lastElementChild;
        const editArray = sortOutput();
        if(task.checked){
            

          

        const updateObject = editArray.findIndex(((elem) => elem.index === taskId.id));

        editArray[updateObject].completed = true;
        updatingstorage(editArray);
        }

        else{
          
        const updateObject = editArray.findIndex(((elem) => elem.index === taskId.id));

        editArray[updateObject].completed = false;
        updatingstorage(editArray);
        }
       })
    })
   
}

    export default taskUpdate;