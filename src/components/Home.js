import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar';
import Footer from './footer';
import "./Css/dashboard.css";
import noteContext from '../context/notes/noteContext';
import taskContext from '../context/tasks/taskContext';

function Home() {
  const NotesContext = useContext(noteContext);
  const { notes, getNotes } = NotesContext;
  const TaskContext = useContext(taskContext);
  const { task, getTask } = TaskContext;
  useEffect(() => {
    const fetchData = async () => {
      await getNotes();      
      await getTask();
    };

    fetchData();
  }, []);
  const Today = new Date().toDateString();
  const completedTask = task.filter(task => task.status === "Complete").length;
  const todayNotes = notes.filter(note => new Date(note.date).toDateString() === Today).length;
  const totalItems = task.length + notes.length;
  const productivity = totalItems === 0 ? 0 : Math.round(((completedTask + todayNotes) / totalItems) * 100);


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
            <h2>{task?.length || 0}</h2>
          </div>
          <div className="icon blue">
            <i className=
              "fa-regular fa-circle-check"></i>
          </div>
        </div>

        <div className="card">
          <div className="card-text">
            <p>Notes Created</p>
            <h2>{notes?.length}</h2>
          </div>
          <div className="icon purple">
            <i className="fa-regular fa-file-lines"></i>
          </div>
        </div>

        <div className="card">
          <div className="card-text">
            <p>Completed</p>
            <h2>{completedTask}</h2>
          </div>
          <div className="icon green">
            <i className=
              "fa-solid fa-arrow-trend-up"></i>
          </div>
        </div>

        <div className="card">
          <div className="card-text">
            <p>Productivity</p>
            <h2>{`${productivity} %`}</h2>
          </div>
          <div className="icon orange">
            <i className=
              "fa-solid fa-chart-column"></i>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home
