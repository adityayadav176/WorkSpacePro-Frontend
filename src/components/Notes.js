import React, { useContext, useEffect, useState } from 'react'
import NoteItem from '../components/noteItem';
import "./Css/notes.css";
import noteContext from "../context/notes/noteContext"
import AddNote from './AddNote';
import EditingNote from './EditingNote';


function Notes() {
 const context = useContext(noteContext);
  const {notes, getNotes ,updateNote} = context; 
  useEffect(() => {
   getNotes();
    // eslint-disable-next-line
  }, [])
  
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="notes-title-container">
      <div className="notes-nav">
        <h2>Notes & Documentation</h2>
        <p>Keep track of important information</p>
      </div>
      <div className="btn">
        <button onClick={() => setShowForm(true)} className='add-note'>
          <i className=
"fa-solid fa-plus">
          </i>New Note  </button>
          
      </div>
      </div>
     {showForm ? <AddNote closeForm={() => setShowForm(false)} /> : updateNote && <EditingNote/>}
      <div className="notes-container">
  {notes.length > 0 ? (
    notes.map((note) => (
      <NoteItem key={note._id} note={note} />
    ))
  ) : (
    <div className="empty-wrapper">
      <div className="empty-notes">
        <i className="fa-regular fa-note-sticky"></i>

        <h2>Your Notebook is Empty</h2>

        <p>
          Every great idea starts with a single note. Capture your thoughts,
          organize your plans, and build your productivity journey with
          <strong> WorkSpace Pro</strong>.
        </p>

        <span>
          Click <strong>"New Note"</strong> above to create your first note.
        </span>
      </div>
    </div>
  )}
</div>
     
    </>
  )
}

export default Notes
