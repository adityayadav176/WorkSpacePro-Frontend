import React, { useState, useContext } from 'react'
import "./Css/AddTask.css"
import taskContext from '../context/tasks/taskContext';
import { toast } from "react-toastify";


function AddTask(props) {
    const { closeForm } = props;
    const context = useContext(taskContext);
    const { addTask } = context;
    const [task, setTask] = useState({ title: "", description: "", priority: "low", status: "pending" })

    const HandleClick = async () => {
    if (!task.title.trim() || !task.description.trim()) {
        toast.error("All Fields Are Required");
        return;
    }

    try {
        await addTask(
            task.title,
            task.description,
            task.status,
            task.priority
        );

        toast.success("Task Added Successfully!");
        closeForm();

        setTask({
            title: "",
            description: "",
            priority: "low",
            status: "pending"
        });

    } catch (error) {
        toast.error("Failed to add task");
    }
};
    const onChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="addTaskBigContainer">
                <div className="AddTaskContainer">
                    <h2>Create New Task</h2>
                    <div className="TaskTitleInput">
                        <span>Task Title</span>
                        <input type="text" placeholder='Enter task title...' minLength={3} onChange={onChange} name='title' required />
                    </div>
                    <div className="TaskTitleDescription">
                        <span>Task Description</span>
                        <input type="text" placeholder='Enter task description...' minLength={3} name='description' onChange={onChange} required />
                    </div>
                    <div className="TaskDetails">
                        <div className="priority">
                            <span>Priority</span>
                            <select className='priorityData' onChange={onChange} name='priority'>
                                <option value="Low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className="Status">
                            <span>Status</span>
                            <select className='StatusData' name='status' onChange={onChange}>
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Process</option>
                                <option value="completed">Complete</option>
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
