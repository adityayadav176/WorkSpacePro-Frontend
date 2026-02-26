import React, { useState, useContext } from "react";
import noteContext from "./noteContext";
import progressContext from "../Progress/progressContext";

const NoteState = (props) => {
  const ProgressContext = useContext(progressContext)
  const { setProgress } = ProgressContext;
  const host = "http://localhost:8000";
  const notesInitial = []

   // get all notes  
  const getNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem("token")
      }
    });
    const json = await response.json();
    setNotes(json)
  }

  // ADD NOTE

  const addNote = async (title, description, tag) => {
    // API CALL
    setProgress(30)
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    setNotes((prevNotes) => prevNotes.concat(json));
    setProgress(100)
  }

  // DELETE NOTE

 const deleteNote = async (id) => {
    setProgress(30)
  const response =  await fetch(`${host}/api/notes/deleteNote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': "application/json",
      'auth-token': localStorage.getItem("token")
    }
  });
  const json = await response.json();
  const newNote = notes.filter((note) => {return note._id !== id})
  setNotes(newNote);
  setProgress(100)
}

  // EDIT NOTE

 const editNote = async (id, title, description, tag) => {
  setProgress(30)
  // API CALL
  const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
    method: "PUT",  // ideally should be PUT
    headers: {
      'Content-Type': "application/json",
      'auth-token': localStorage.getItem("token")
    },
    body: JSON.stringify({ title, description, tag })
  });
  const json = await response.json();

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
  setProgress(100)
};

 const shortText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }


  const [notes, setNotes] = useState(notesInitial)
  const [updateNote, setUpdateNote] = useState(false)
  const [currentNote, setCurrentNote] = useState(null);
  return (

    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes, setUpdateNote, updateNote, setCurrentNote, currentNote, shortText }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;