import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:8000";
  const notesInitial = []

   // get all notes  
  const getNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4NGMyYjk0ZDE4YzgwNTk4ZjNhNjJmIn0sImlhdCI6MTc3MDMwODI4MX0.JXU-0aLOSaDksPET3JlPl9JceKMo_1Tlvwf2gt01VXo"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  }

  // ADD NOTE

  const addNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4NGMyYjk0ZDE4YzgwNTk4ZjNhNjJmIn0sImlhdCI6MTc3MDMwODI4MX0.JXU-0aLOSaDksPET3JlPl9JceKMo_1Tlvwf2gt01VXo"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    setNotes((prevNotes) => prevNotes.concat(json));
  }

  // DELETE NOTE

 const deleteNote = async (id) => {
  const response =  await fetch(`${host}/api/notes/deleteNote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': "application/json",
      'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4NGMyYjk0ZDE4YzgwNTk4ZjNhNjJmIn0sImlhdCI6MTc3MDMwODI4MX0.JXU-0aLOSaDksPET3JlPl9JceKMo_1Tlvwf2gt01VXo"
    }
  });
  const json = await response.json();
  console.log(json);

  const newNote = notes.filter((note) => {return note._id !== id})
  setNotes(newNote);
}

  // EDIT NOTE

 const editNote = async (id, title, description, tag) => {

  // API CALL
  const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
    method: "PUT",  // ideally should be PUT
    headers: {
      'Content-Type': "application/json",
      'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4NGMyYjk0ZDE4YzgwNTk4ZjNhNjJmIn0sImlhdCI6MTc3MDMwODI4MX0.JXU-0aLOSaDksPET3JlPl9JceKMo_1Tlvwf2gt01VXo"
    },
    body: JSON.stringify({ title, description, tag })
  });

  const json = await response.json();
  console.log(json);

  // CLIENT UPDATE
  let newNotes = JSON.parse(JSON.stringify(notes));

  for (let i = 0; i < newNotes.length; i++) {
    if (newNotes[i]._id === id) {
      newNotes[i].title = title;
      newNotes[i].description = description;
      newNotes[i].tag = tag;
      break;
    }
  }

  setNotes(newNotes);
};


  const [notes, setNotes] = useState(notesInitial)
  const [updateNote, setUpdateNote] = useState(false)
  const [currentNote, setCurrentNote] = useState(null);
  return (

    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes, setUpdateNote, updateNote, setCurrentNote, currentNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;