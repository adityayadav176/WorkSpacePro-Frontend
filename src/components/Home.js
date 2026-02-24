import React, {useContext} from 'react'
import NavBar from '../components/NavBar';
import Footer from './footer';
import "./Css/dashboard.css";
import noteContext from '../context/notes/noteContext';
import taskContext from '../context/tasks/taskContext';

function Home() {
   const NotesContext = useContext(noteContext);
    const {notes} = NotesContext;
   const TaskContext = useContext(taskContext);
    const {task} = TaskContext;
     
  return (
    <>
    <NavBar />
     <div className="tasks-title-container">
      <div className="tasks-nav">
        <h2>Dashboard Overview</h2>
        <p>Monitor your productivity and activity</p>
      </div>
      </div>
      <div className="dashboard-cards">
      
      <div className="card">
        <div className="card-text">
          <p>Total Tasks</p>
          <h2>{task.length}</h2>
        </div>
        <div className="icon blue">
          <i className=
"fa-regular fa-circle-check"></i>
        </div>
      </div>

      <div className="card">
        <div className="card-text">
          <p>Notes Created</p>
          <h2>{notes.length}</h2>
        </div>
        <div className="icon purple">
          <i className="fa-regular fa-file-lines"></i>
        </div>
      </div>

      <div className="card">
        <div className="card-text">
          <p>Completed</p>
          <h2>1</h2>
        </div>
        <div className="icon green">
         <i className=
"fa-solid fa-arrow-trend-up"></i>
        </div>
      </div>

      <div className="card">
        <div className="card-text">
          <p>Productivity</p>
          <h2>33%</h2>
        </div>
        <div className="icon orange">
          <i className=
"fa-solid fa-chart-column"></i>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Home
