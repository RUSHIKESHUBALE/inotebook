import React, { useContext, useEffect } from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/notescontext'
import AddNote from './AddNote';


function Notes() {
    // Store the context in some variable
    const context = useContext(noteContext);

    // Assign the values here locally
    const { notes, getNotes } = context;

    useEffect(()=>{
        getNotes();
    },[])

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NotesItem key={note._id} note = {note} /> // Sending the whole note as props
                })}
            </div>
        </>
    )
}

export default Notes
