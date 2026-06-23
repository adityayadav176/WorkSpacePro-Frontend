import React, { useState, useContext } from "react";
import noteContext from "./noteContext";
import progressContext from "../Progress/progressContext";

const NoteState = (props) => {
  const host = process.env.REACT_APP_BACKEND_URL;
  const ProgressContext = useContext(progressContext)
  const { setProgress } = ProgressContext;
  const notesInitial = []

   // get all notes  
const getNotes = async () => {
  try {
    const response = await fetch(
      `${host}/api/notes/fetchAllNotes`,
      {
        method: "GET",
        credentials: "include"
      }
    );

    const json = await response.json();

    if (response.ok) {
      setNotes(json.data.notes);
    }
  } catch (error) {
    console.log(error);
  }
};

  // ADD NOTE

const addNote = async (title, description, tag) => {
  try {
    setProgress(30);

    const response = await fetch(
      `${host}/api/notes/addNote`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          tag
        })
      }
    );

    const json = await response.json();

    if (response.ok) {
      setNotes((prev) => [...prev, json.data]);
    }

    setProgress(100);
  } catch (error) {
    console.log(error);
    setProgress(100);
  }
};

  // DELETE NOTE

const deleteNote = async (noteId) => {
  try {
    setProgress(30);

    const response = await fetch(
      `${host}/api/notes/deleteNote/${noteId}`,
      {
        method: "DELETE",
        credentials: "include"
      }
    );

    if (response.ok) {
      setNotes((prev) =>
        prev.filter((note) => note._id !== noteId)
      );
    }

    setProgress(100);
  } catch (error) {
    console.log(error);
    setProgress(100);
  }
};

  // EDIT NOTE

const editNote = async (
  noteId,
  title,
  description,
  tag
) => {
  try {
    setProgress(30);

    const response = await fetch(
      `${host}/api/notes/updateNote/${noteId}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          tag
        })
      }
    );

    const json = await response.json();

    if (response.ok) {
      setNotes((prev) =>
        prev.map((note) =>
          note._id === noteId
            ? json.data
            : note
        )
      );
    }

    setProgress(100);
  } catch (error) {
    console.log(error);
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