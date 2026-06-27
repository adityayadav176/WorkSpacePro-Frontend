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
import About from "./components/About.js"
import NavBar from './components/NavBar.js';
import Footer from './components/footer.js';



function App() {
  const { progress, setProgress } = useContext(ProgressContext)
  const location = useLocation();

  useEffect(() => {
    setProgress(0);
    setProgress(30);
    const titles = {
      "/": "Login",
      "/signup": "Signup",
      "/dashboard": "Dashboard",
      "/notes": "Notes",
      "/task": "Task",
      "/about":"About",
    };

    const timer = setTimeout(() => {
      setProgress(100);
    }, 600);
    document.title = `WorkSpace Pro - ${titles[location.pathname]}` || "WorkSpace Pro";


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
            <Route path="/dashboard" element={<><NavBar/><Home /><Footer/></>} />
            <Route path="/notes" element={<><NavBar/><Notes /><Footer/></>} />
            <Route path="/task" element={<><NavBar/><Task /><Footer/></>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<><NavBar /> <About /><Footer/></>} />
          </Routes>
        </NoteState>
      </TaskState>
    </>
  );
}

export default App;
