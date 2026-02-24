import React, { useState } from "react";
import taskContext from "./taskContext"

const TaskState = (props) => {
    const Host = "http://localhost:8000"
    const taskInitial = [];
    const [task, setTask] = useState(taskInitial);

    // fetchAllTask
    const getTask = async () => {
        const response = await fetch(`${Host}/api/task/fetchAllTask`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json()
        setTask(json);

    }

    // deleteTask
    const deleteTask = async (id) => {
        const response = await fetch(`${Host}/api/task/deleteTask/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json()
        const newTask = task.filter((task)=>{ return task._id !== id})
        setTask(newTask);
    }


    return (
        <taskContext.Provider value={{ task, getTask, setTask, deleteTask }}>
            {props.children}
        </taskContext.Provider>
    );
};

export default TaskState;