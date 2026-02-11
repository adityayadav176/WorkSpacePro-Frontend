import React from 'react'
import NavBar from './NavBar'
import "./Css/Task.css"
import TaskItem from './TaskItem'
import Footer from './footer';
function Task() {
  return (
    <>
      <NavBar/>
       <div className="tasks-title-container">
      <div className="tasks-nav">
        <h2>Task Management</h2>
        <p>Organize and track your tasks</p>
      </div>
      <div className="btn">
        <button className='add-Task'>
          <i class="fa-solid fa-plus">
          </i>New Task</button>
      </div>
      </div>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <Footer/>
    </>
  )
}

export default Task
