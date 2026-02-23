import React, { useState } from "react";
import taskContext from "./taskContext"

const TaskState = (props) => {
    const Host = "http://localhost:8000"
    const taskInitial = [];
    const [task, setTask] = useState(taskInitial);

    // fetchAllTask
    const getTask = async() =>{
        const response = await fetch(`${Host}/api/task/fetchAllTask`, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4NGMyYjk0ZDE4YzgwNTk4ZjNhNjJmIn0sImlhdCI6MTc3MDMwODI4MX0.JXU-0aLOSaDksPET3JlPl9JceKMo_1Tlvwf2gt01VXo"
            }
        });

        const json = await response.json()
        setTask(json);
        console.log("API RESPONSE", json);
        
    }
    return(
        <taskContext.Provider value={{task ,getTask, setTask}}>
            {props.children}
        </taskContext.Provider>
    );
};

export default TaskState;