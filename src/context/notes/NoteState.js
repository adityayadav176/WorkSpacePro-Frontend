import React, { useState, useContext } from "react";
import noteContext from "./noteContext";
import progressContext from "../Progress/progressContext";
import api from "../../axios/api.js"

const NoteState = (props) => {
  const ProgressContext = useContext(progressContext)
  const { setProgress } = ProgressContext;
  const notesInitial = []

   // get all notes  
const getNotes = async () => {
  try {
    const response = await api.get("/api/notes/fetchAllNotes");

    setNotes(response.data.data.notes);
  } catch (error) {
    console.log(error);
  }
};

  // ADD NOTE

const addNote = async (title, description, tag) => {
  try {
    setProgress(30);

    const response = await api.post("/api/notes/addNote", {
      title,
      description,
      tag
    });

    setNotes((prev) => [...prev, response.data.data]);

    setProgress(100);
  } catch (error) {
    setProgress(100);
  }
};

  // DELETE NOTE

const deleteNote = async (noteId) => {
  try {
    setProgress(30);

    await api.delete(`/api/notes/deleteNote/${noteId}`);

    setNotes((prev) =>
      prev.filter((note) => note._id !== noteId)
    );

    setProgress(100);
  } catch (error) {
    setProgress(100);
  }
};

  // EDIT NOTE

const editNote = async (noteId, title, description, tag) => {
  try {
    setProgress(30);

    const response = await api.patch(
      `/api/notes/updateNote/${noteId}`,
      {
        title,
        description,
        tag
      }
    );

    setNotes((prev) =>
      prev.map((note) =>
        note._id === noteId ? response.data.data : note
      )
    );

    setProgress(100);
  } catch (error) {
    setProgress(100);
  }
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