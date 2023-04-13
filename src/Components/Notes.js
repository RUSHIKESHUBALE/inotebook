import React, { useContext } from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/notescontext'
import AddNote from './AddNote';


function Notes() {
    // Store the context in some variable
    const context = useContext(noteContext);

    // Assign the values here locally
    const { notes, setNotes } = context;

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note, addNote) => {
                    return <NotesItem key={note._id} title={note.title} description={note.description} />
                })}
            </div>
        </>
    )
}

export default Notes
