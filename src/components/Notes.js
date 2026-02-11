import React, { useContext } from 'react'
import NavBar from '../components/NavBar';
import NoteItem from '../components/noteItem';
import "./Css/notes.css";
import Footer from './footer';
import noteContext from "../context/notes/noteContext"


function Notes() {
 const context = useContext(noteContext);
  const {notes, setNotes} = context; 

  return (
    <>

      <NavBar />
      <div className="notes-title-container">
      <div className="notes-nav">
        <h2>Notes & Documentation</h2>
        <p>Keep track of important information</p>
      </div>
      <div className="btn">
        <button className='add-note'>
          <i className=
"fa-solid fa-plus">
          </i>New Note</button>
      </div>
      </div>

      <div className="notes-container">
        {notes.map((note)=>{
        return  <NoteItem key={note._id} note={note}/>
      })}
      </div>
       <Footer/>
    </>
  )
}

export default Notes
