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
    setNotes(notes.concat(json))
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
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4NGMyYjk0ZDE4YzgwNTk4ZjNhNjJmIn0sImlhdCI6MTc3MDMwODI4MX0.JXU-0aLOSaDksPET3JlPl9JceKMo_1Tlvwf2gt01VXo"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    //LOGIC TO EDIT IN CLIENT
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }


  const [notes, setNotes] = useState(notesInitial)
  return (

    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;