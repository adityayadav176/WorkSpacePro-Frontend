import React, { useContext, useState } from 'react'
import "./Css/Addnote.css"
import noteContext from "../context/notes/noteContext"

function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "general" })

    const handleClick = () => {
        if (!note.title.trim() || !note.description.trim()) {
            alert("Fill title and description");
            return;
        }
        addNote(shortText(note.title, 20), shortText(note.description, 40), note.tag);
        setNote({ title: "", description: "", tag: "general" });
        props.closeForm();
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const shortText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
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

                        <select onChange={onchange} name='tag'>
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
