import React, {useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
  {
    "_id": "6985923cwewe9fb5d249ee6f89814",
    "user": "6984c2b94d18c80598f3a62f",
    "title": "introduction",
    "description": "my name is aditya",
    "tag": "general",
    "date": "2026-02-06T07:03:24.095Z",
    "__v": 0
  },
  {
    "_id": "698775918a573e4d11f9794dd",
    "user": "6984c2b94d18c80598f3a62f",
    "title": "introduction",
    "description": "my name is aditya",
    "tag": "general",
    "date": "2026-02-07T17:25:37.618Z",
    "__v": 0
  },
]

const [notes, setNotes] = useState(notesInitial)
  return (

    <noteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;