import React, {useState} from 'react';
import './App.css';
import trashIcon from './trash.svg'


function App() {
  const [taskInput,updateTaskInput]=useState("");
  const [toDoList, updateToDoList]=useState([]);
  const addNote=()=>{
     toDoList.push({description: taskInput});
     updateToDoList(toDoList);
     updateTaskInput("");
  }
  const deleteTask=(index)=>{
   const newList=toDoList.filter((item,i)=> i !== index);
   updateToDoList(newList);
  }

  return (
    <div className="app-background">
         <p className="heading-text">To Do List</p>
         <div className="task-container">
            <div>
                <input className="text-input"
                 value={taskInput}
                  onChange={(event)=>updateTaskInput(event.target.value)}></input>
                <button className="add-button" onClick={addNote}>ADD</button>
            </div>
            {toDoList.length ? toDoList.map((toDoObject,index)=> <ListItem index={index} itemData={toDoObject} deleteTask={deleteTask}></ListItem> ):
          
          <p className="no-item-text">No Task Added</p>}
            
         </div>
     
    </div>
  );
}

function ListItem(props){
  return (
  <div className="list-item row jc-space-between">
         <span>{props.itemData.description}</span>
         <img src={trashIcon} className="delete-icon" onClick={()=>props.deleteTask(props.index)}/> 
  </div>
  )
}


export default App;
