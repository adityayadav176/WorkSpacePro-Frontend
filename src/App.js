import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes'
import Task from './components/Task'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import NoteState from './context/notes/NoteState';
import TaskState from './context/tasks/TaskState';
import LoadingBar from "react-top-loading-bar";
import React, { useContext, useEffect } from 'react';
import ProgressContext from './context/Progress/progressContext';



function App() {
  const { progress, setProgress } = useContext(ProgressContext)
  const location = useLocation();

  useEffect(() => {
    setProgress(0);
    setProgress(30);
    const titles = {
      "/": "Login",
      "/signup": "Signup",
      "/Dashboard": "Dashboard",
      "/Notes": "Notes",
      "/Task": "Task"
    };

    const timer = setTimeout(() => {
      setProgress(100);
    }, 600);
    document.title = titles[location.pathname] || "WorkSpace Pro";


    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      <TaskState>
        <NoteState>

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
          />
          <LoadingBar color="blue" progress={progress} onLoaderFinished={() => setProgress(0)} height={3} shadow={false} />
          <Routes>
            <Route path="/Dashboard" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/task" element={<Task />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </NoteState>
      </TaskState>
    </>
  );
}

export default App;
