import React, {useContext} from 'react'
import './Css/TaskItem.css'
import taskContext from '../context/tasks/taskContext';

function TaskItem(props) {
  const {task} = props;
   const context = useContext(taskContext);
  const {deleteTask} = context;
  return (
    <>
   
      <div className="Task-container">
        <div className="task-data">
        <div className="task-title">
            <h2>{task.title}</h2>
            <p className='Priority'>{task.priority}</p>
        </div>
        <div className="task-btn">
            <i className=
"fa-solid fa-check task-tick-btn"></i>
            <i className=
"fa-regular fa-trash-can task-trash-btn" onClick={()=>{deleteTask(task._id)}}></i>
            </div>
        </div>
        <div className="Task-description">
            <p>{task.description}</p>
        </div>
        <div className="task-process-date">
           <div className="process">
            <i className=
"fa-solid fa-check"></i>
            {task.Status}
           </div>
           <div className="task-date">
            <i className=
"fa-regular fa-clock"></i>
            {new Date (task.date).toDateString()}
           </div>
        </div>
      </div> 
    </>
  )
}

export default TaskItem
