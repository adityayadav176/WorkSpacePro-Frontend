import React, { useState, useContext } from "react";
import taskContext from "./taskContext";
import progressContext from "../Progress/progressContext";

const TaskState = (props) => {
    const ProgressContext = useContext(progressContext);
    const { setProgress } = ProgressContext;

    const Host = process.env.REACT_APP_BACKEND_URL;

    const [task, setTask] = useState([]);

    const updateTaskStatusInState = (id) => {
        setTask(
            task.map((task) =>
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
        console.log(json);

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
        setProgress(30);

        const response = await fetch(
            `${Host}/api/task/addTask`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    priority,
                    status
                })
            }
        );

        const json = await response.json();

        if (response.ok) {
            setTask((prev) => [
                ...prev,
                json.task
            ]);
        }

        setProgress(100);
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