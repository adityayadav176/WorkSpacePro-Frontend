import React from 'react'
import "./Css/noteItem.css";

function NoteItem(props) {
    const {note} = props;
    return (
        <>
            <div className="Notes-items">
                <div className="Note-title">
                    <h2>{note.title}</h2>
                    <p className='tag'>{note.tag}</p>
                </div>
                <p className='description'>{note.description}</p>
                <div className="Note-lower-data">
                    <div className="note-date">
                       {note.date}
                    </div>
                    <div className="Note-btn">
                            <i className=
"fa-regular fa-pen-to-square"></i>
                            <i className=
"fa-regular fa-trash-can note-trash-btn"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
