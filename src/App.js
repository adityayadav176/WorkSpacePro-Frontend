import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Task from './components/Task'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Notes from './components/Notes';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Task" element={<Task/>} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
       </Routes>
      </Router>
    </>
  );
}

export default App;
