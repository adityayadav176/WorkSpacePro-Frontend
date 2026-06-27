import React, { useContext } from 'react'
import './Css/TaskItem.css'
import taskContext from '../context/tasks/taskContext';
import { toast } from "react-toastify";
import api from "../axios/api.js";

function TaskItem(props) {
  const { task } = props;
  const context = useContext(taskContext);
  const { deleteTask, updateTaskStatusInState} = context;

const updateStatus = async () => {
  if (task.status === "Complete") {
    toast.warn("Task is already completed");
    return;
  }

  try {
    const res = await api.patch(
      `/api/task/updateTask/${task._id}`,
      { status: "completed" }
    );

    toast.success("Task Completed");

    const updatedTaskFromServer = res.data?.data; 
    if (updatedTaskFromServer) {
        updateTaskStatusInState(task._id, updatedTaskFromServer);
    }

  } catch (error) {
    toast.error(error?.response?.data?.message || "Status update failed");
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
            {new Date(task.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskItem
