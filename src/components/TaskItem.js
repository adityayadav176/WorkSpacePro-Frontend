import React from 'react'
import './Css/TaskItem.css'

function TaskItem() {
  return (
    <>
      <div className="Task-container">
        <div className="task-data">
        <div className="task-title">
            <h2>Complete project documentation</h2>
            <p className='Priority'> high</p>
        </div>
        <div className="task-btn">
            <i class="fa-solid fa-check task-tick-btn"></i>
            <i class="fa-regular fa-trash-can task-trash-btn"></i>
            </div>
        </div>
        <div className="Task-description">
            <p>Write comprehensive documentation for the new features</p>
        </div>
        <div className="task-process-date">
           <div className="process">
            <i class="fa-solid fa-check"></i>
            Complete
           </div>
           <div className="task-date">
            <i class="fa-regular fa-clock"></i>
            03/01/2025 
           </div>
        </div>
      </div> 
    </>
  )
}

export default TaskItem
