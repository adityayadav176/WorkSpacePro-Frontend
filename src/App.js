import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes'
import Task from './components/Task'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NoteState from './context/notes/NoteState';
import TaskState from './context/tasks/TaskState';


function App(props) {
  return (
    <>
    <TaskState>
      <NoteState>
        <Router>
          <Routes>
            <Route path="/Dashboard" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/task" element={<Task />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </NoteState>
      </TaskState>
    </>
  );
}

export default App;
