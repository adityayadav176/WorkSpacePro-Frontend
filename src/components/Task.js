import React, { useContext, useEffect, useState } from 'react'
import "./Css/Task.css"
import TaskItem from './TaskItem'
import taskContext from '../context/tasks/taskContext';
import AddTask from './AddTask';

function Task() {
  const [AddTaskModal, setAddTaskModal] = useState(false)
  const context = useContext(taskContext);
  const { getTask, task } = context;

  useEffect(() => {
  const fetch = async () => {
    await getTask();
  };
  fetch();
}, [getTask]);


  return (
    <>
      <div className="tasks-title-container">
        <div className="tasks-nav">
          <h2>Task Management</h2>
          <p>Organize and track your tasks</p>
        </div>
        <div className="btn">
          <button className='add-Task' onClick={() => { setAddTaskModal(true) }}>
            <i className=
              "fa-solid fa-plus">
            </i>New Task</button>
        </div>
      </div>
      {AddTaskModal ? <AddTask closeForm={() => { setAddTaskModal(false) }} /> : ""}
     {task && task.length > 0 ? (
  <div className="task-container">
    {task
      .filter(Boolean)
      .map((t) => (
        <TaskItem key={t._id} task={t} />
      ))}
  </div>
) : (
  <div className="empty-task-wrapper">
    <div className="empty-task">
      <i className="fa-regular fa-square-check"></i>

      <h2>No Tasks Available</h2>

      <p>
        Every successful project begins with a well-planned task.
        Stay organized, prioritize your work, and accomplish your goals
        efficiently with <strong>WorkSpace Pro</strong>.
      </p>

      <span>
        Click <strong>"New Task"</strong> above to create your first task.
      </span>
    </div>
  </div>
)}
    </>
  )
}


export default Task
