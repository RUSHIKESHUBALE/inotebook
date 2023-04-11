import React, {useContext} from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/notescontext'


function Notes() {
    // Store the context in some variable
    const context = useContext(noteContext);

    // Assign the values here locally
    const { notes, setNotes } = context;

    return (
        <div class = "row my-3">
            <h2>Your notes</h2>
            {notes.map((note) => {
                return <NotesItem title={note.title} description={note.description} key = {note.id} />
            })}
        </div>
    )
}

export default Notes
