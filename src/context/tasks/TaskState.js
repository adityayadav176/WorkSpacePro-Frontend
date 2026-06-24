import React, { useState, useContext } from "react";
import taskContext from "./taskContext";
import progressContext from "../Progress/progressContext";
import api from "../../axios/api.js";

const TaskState = (props) => {
    const ProgressContext = useContext(progressContext);
    const { setProgress } = ProgressContext;

    const [task, setTask] = useState([]);

    const updateTaskStatusInState = (TaskId, updatedTask) => {
    setTask((prevTasks) => {
        if (Array.isArray(prevTasks)) {
            return prevTasks.map((t) => (t._id === TaskId ? updatedTask : t));
        }
        
        if (prevTasks && Array.isArray(prevTasks.tasks)) {
            return {
                ...prevTasks,
                tasks: prevTasks.tasks.map((t) => (t._id === TaskId ? updatedTask : t))
            };
        }

        return prevTasks;
    });
};

    // FETCH ALL TASKS
 const getTask = async () => {
  try {
    const res = await api.get("/api/task/fetchAllTask");
    if (res.data && res.data.data && Array.isArray(res.data.data.tasks)) {
        setTask(res.data.data.tasks); 
    }
  } catch (error) {
    console.error("Failed to load tasks:", error);
  }
};

    // DELETE TASK
    const deleteTask = async (id) => {
        try {
            setProgress(30);
            const res = await api.delete(`/api/task/deleteTask/${id}`);

            if (res.data) {
                setTask((prev) => {
                    if (!Array.isArray(prev)) return [];
                    return prev.filter((t) => t._id !== id);
                });
            }
            setProgress(100);
        } catch (error) {
            console.error("Error deleting task:", error);
            setProgress(100);
        }
    };

    // ADD TASK
    const addTask = async (title, description, status, priority) => {
        try {
            setProgress(30);

            const res = await api.post("/api/task/addTask", {
                title,
                description,
                status,
                priority,
            });

            const newTask = res.data.data || res.data.task;

            if (newTask) {
                setTask((prev) => {
                    if (!Array.isArray(prev)) return [newTask];
                    return [...prev, newTask];
                });
            }

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