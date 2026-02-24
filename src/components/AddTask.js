import React from 'react'
import "./Css/AddTask.css"

function AddTask(props) {
    const {closeForm} = props;
    const HandleClick = () => {
        closeForm()
    }
  return (
    <>
    <div className="addTaskBigContainer">
     <div className="AddTaskContainer">
        <h2>Create New Task</h2>
        <div className="TaskTitleInput">
            <span>Task Title</span>
            <input type="text" placeholder='Enter task title...' minLength={3}  required/>
        </div>
        <div className="TaskTitleDescription">
            <span>Task Description</span>
            <input type="text" placeholder='Enter task description...' minLength={3} required/>
        </div>
        <div className="TaskDetails">
            <div className="priority">
                <span>Priority</span>
                <select className='priorityData'>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>    
            <div className="Status">
                <span>Status</span>
                <select className='StatusData'>
                    <option value="Pending">Pending</option>    
                    <option value="In Process">In Process</option>    
                    <option value="Complete">Complete</option>    
                </select>    
            </div>       
        </div>
        <div className="AddTaskBtn">
            <button className='creteTask' onClick={HandleClick}>Create Task</button>
            <button className='createTaskCancel' onClick={closeForm}>Cancel</button>
        </div>
    </div> 
    </div>
    </>
  )
}

export default AddTask;
