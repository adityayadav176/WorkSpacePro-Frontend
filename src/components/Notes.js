import React from 'react'
import NavBar from '../components/NavBar';
import NoteItem from '../components/noteItem';
import "./Css/notes.css";
import Footer from './footer';


function Notes() {

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
          <i class="fa-solid fa-plus">
          </i>New Note</button>
      </div>
      </div>

      <div className="notes-container">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      </div>
      <Footer/>
    </>
  )
}

export default Notes
