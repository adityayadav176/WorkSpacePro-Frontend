import React, { useContext, useState } from 'react'
import "./Css/Addnote.css"
import noteContext from "../context/notes/noteContext"
import { toast } from "react-toastify";

function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "general" })

    const handleClick = () => {
        if (!note.title.trim() || !note.description.trim()) {
             toast.error("All Fields Are Required");
            return;
        }
        const success = addNote(note.title, note.description, note.tag);
        props.closeForm();
        if (success) {
            toast.success("Note Added Successfully!");
        } else {
            toast.error("Failed to add task");
        }
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="ModalOverlay">
                <div className="modalBox">
                    <h2>Create New Note</h2>
                    <div className="titleInput">
                        <span>Note Title</span>
                        <input type="text" placeholder='Enter note title...' minLength={3} required onChange={onchange} name='title' />
                    </div>
                    <div className="categoryInput" >
                        <span>Category</span>

                        <select onChange={onchange} name='tag' value={note.tag}>
                            <option value="general">General</option>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="ideas">Ideas</option>
                            <option value="important">Important</option>
                        </select>
                    </div>
                    <div className="contentInput">
                        <span>Content</span>
                        <input type="text" placeholder='Enter note Content...' minLength={5} required onChange={onchange} name='description' />
                    </div>
                    <div className="addNoteBtnsSection">
                        <button className='AddnoteBtn' onClick={handleClick}>Create</button>
                        <button className='CancelnoteBtn' onClick={props.closeForm}>Cancel</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddNote
