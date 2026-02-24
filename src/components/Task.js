import React, {useContext, useEffect, useState} from 'react'
import NavBar from './NavBar'
import "./Css/Task.css"
import TaskItem from './TaskItem'
import Footer from './footer';
import taskContext from '../context/tasks/taskContext';
import AddTask from './AddTask';

function Task() {
  const [AddTaskModal, setAddTaskModal] = useState(false)
  const context = useContext(taskContext);
  const {getTask, task} = context;
  console.log(task)
  
  useEffect(() => {
   getTask();
  }, [])
  

  return (
    <>
      <NavBar/>
       <div className="tasks-title-container">
      <div className="tasks-nav">
        <h2>Task Management</h2>
        <p>Organize and track your tasks</p>
      </div>
      <div className="btn">
        <button className='add-Task' onClick={()=>{setAddTaskModal(true)}}>
          <i className=
"fa-solid fa-plus">
          </i>New Task</button>
      </div>
      </div>
      {AddTaskModal ? <AddTask closeForm={()=>{setAddTaskModal(false)}}/> : ""}
      {task.map((task)=>{
        return <TaskItem key={task._id} task={task}/>
      })}
      <Footer/>
    </>
  )
}


export default Task
