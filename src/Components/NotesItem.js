import React, { useContext } from 'react'
import noteContext from '../context/notes/notescontext'


function NotesItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note,updateNote } = props;
    // console.log(note._id);

    const handleClick = (e)=>{
        e.preventDefault();
        deleteNote(note._id);
        props.showAlert("danger", "Note deleted Succesfully")
    }

    return (
        <div className="col-md-4">
            <div className="card my-2" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="contianer d-flex justify-content-between mb-2">
                        <button type="button" className="btn btn-primary" onClick={()=>{updateNote(note)}}>Edit</button>
                        <button type="button" className="btn btn-danger" onClick={handleClick}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesItem
