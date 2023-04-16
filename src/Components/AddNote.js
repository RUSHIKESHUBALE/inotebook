import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/notescontext'

function AddNote() {
    // Store the context in some variable
    const context = useContext(noteContext);

    // Assign the values here locally
    const { addNote } = context;

    const [note, setNote] = useState({title : "Default title", description : "Default description", tag : "Default"})

    const handleClick = (e)=>{
        e.preventDefault();  // For not reloading page
        addNote(note.title, note.description, note.tag); // Whatever being changed at name (in the input of addNote form) equate it to its value
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: [e.target.value]})
    }
    return (
        <div className="my-3">
            <h2>Add your Note here</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description"  rows="8" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote