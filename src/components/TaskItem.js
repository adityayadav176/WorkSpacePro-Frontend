import React, { useContext } from 'react'
import './Css/TaskItem.css'
import taskContext from '../context/tasks/taskContext';
import { toast } from "react-toastify";

function TaskItem(props) {
  const { task } = props;
  const context = useContext(taskContext);
  const { deleteTask, updateTaskStatusInState} = context;
  const Host = "http://localhost:8000"

  const updateStatus = async () => {

  // If already complete → do nothing
  if (task.status === "Complete") {
    toast.warn("Task is already completed")
    return
  }

  try {
    const response = await fetch(`${Host}/api/task/updateTask/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ status: "Complete" })
    });

    if (!response.ok) {
      toast.error("Status update failed");
      return;
    }

    toast.success("Task Completed ✅");
     //  Update UI instantly without reload
     // Optimistic UI Update 
    updateTaskStatusInState(task._id);

  } catch (error) {
    console.log(error);
  }
};
  return (
    <>

      <div className="Task-container">
        <div className="task-data">
          <div className="task-title">
            <h2>{task.title}</h2>
            <p className={`Priority ${task.priority}`}>{task.priority}</p>
          </div>
          <div className="task-btn">
            <i className=
              "fa-solid fa-check task-tick-btn" onClick={updateStatus}></i>
            <i className=
              "fa-regular fa-trash-can task-trash-btn" onClick={() => {
                const success = deleteTask(task._id)
                if (success) {
                  toast.success("Task deleted Successfully");
                } else {
                  toast.error("Failed to delete note!");
                }
              }}></i>
          </div>
        </div>
        <div className="Task-description">
          <p>{task.description}</p>
        </div>
        <div className="task-process-date">
          <div className="process">
            <i className=
              "fa-solid fa-check"></i>
            {task.status}
          </div>
          <div className="task-date">
            <i className=
              "fa-regular fa-clock"></i>
            {new Date(task.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskItem
