import React from 'react'
import "./Css/noteItem.css";

function NoteItem() {
    return (
        <>
            <div className="Notes-items">
                <div className="Note-title">
                    <h2>note - title</h2>
                    <p className='tag'>tag</p>
                </div>
                <p className='description'>Discussed new feature implementation and timeline. Team agreed on sprint goals.</p>
                <div className="Note-lower-data">
                    <div className="note-date">
                        27/12/2024
                    </div>
                    <div className="Note-btn">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can note-trash-btn"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
