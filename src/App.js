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
// import NoteState from '../context/notes/NoteState';


function App() {
  return (
    <>
      {/* <NoteState> */}
      <Router>
        <Routes>
           <Route path="/Dashboard" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/notes" element={<Task/>} />
          <Route path="/task" element={<Notes />} />
        </Routes>
      </Router>
      {/* </NoteState> */}
    </>
  );
}

export default App;
