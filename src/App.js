import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes'
import Task from './components/Task'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NoteState from './context/notes/NoteState';
import TaskState from './context/tasks/TaskState';
import LoadingBar from "react-top-loading-bar";
import React, { useRef } from 'react';



function App() {
  const loadingRef = useRef(null);

  const startLoading = () => {
    loadingRef.current.continuousStart();
  };

  const stopLoading = () => {
    loadingRef.current.complete();
  };

  return (
    <>
      <TaskState>
        <NoteState>
          <Router>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
            />
            <LoadingBar color="#9318ff" ref={loadingRef} height={3} shadow={false} />
            <Routes>
              <Route path="/Dashboard" element={<Home startLoading={startLoading} stopLoading={stopLoading} />} />
              <Route path="/notes" element={<Notes startLoading={startLoading} stopLoading={stopLoading}/>} />
              <Route path="/task" element={<Task startLoading={startLoading} stopLoading={stopLoading}/>} />
              <Route path="/Signup" element={<Signup startLoading={startLoading} stopLoading={stopLoading}/>} />
              <Route path="/" element={<Login startLoading={startLoading} stopLoading={stopLoading}/>} />
            </Routes>
          </Router>
        </NoteState>
      </TaskState>
    </>
  );
}

export default App;
