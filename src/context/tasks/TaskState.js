import React, { useState, useContext } from "react";
import taskContext from "./taskContext";
import progressContext from "../Progress/progressContext";
import api from "../../axios/api.js"

const TaskState = (props) => {
    const ProgressContext = useContext(progressContext);
    const { setProgress } = ProgressContext;

    const Host = process.env.REACT_APP_BACKEND_URL;

    const [task, setTask] = useState([]);

   const updateTaskStatusInState = (id) => {
    setTask((prevTasks) =>
        prevTasks.map((task) =>
            task._id === id
                ? { ...task, status: "Complete" }
                : task
        )
    );
};

    // FETCH ALL TASKS
    const getTask = async () => {
        const response = await fetch(
            `${Host}/api/task/fetchAllTask`,
            {
                method: "GET",
                credentials: "include"
            }
        );

        const json = await response.json();

        if (response.ok) {
            setTask(json.data.tasks);
        }
    };

    // DELETE TASK
    const deleteTask = async (id) => {
        setProgress(30);

        const response = await fetch(
            `${Host}/api/task/deleteTask/${id}`,
            {
                method: "DELETE",
                credentials: "include"
            }
        );

        const json = await response.json();

        if (response.ok) {
            const newTask = task.filter(
                (task) => task._id !== id
            );

            setTask(newTask);
        }

        setProgress(100);
    };

    // ADD TASK
 const addTask = async (title, description, status, priority) => {
  try {
    setProgress(30);

    const res = await api.post(
      "/api/task/addTask",
      {
        title,
        description,
        status,
        priority,
      },
      {
        withCredentials: true,
      }
    );

    setTask((prev) => [...prev, res.data.data]);

    setProgress(100);
  } catch (error) {
    setProgress(100);
  }
};

    return (
        <taskContext.Provider
            value={{
                task,
                getTask,
                setTask,
                deleteTask,
                addTask,
                updateTaskStatusInState
            }}
        >
            {props.children}
        </taskContext.Provider>
    );
};

export default TaskState;