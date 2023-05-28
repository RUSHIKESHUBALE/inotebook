import React, { useContext, useEffect, useRef, useState } from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/notescontext'
import AddNote from './AddNote';
import { useNavigate } from "react-router-dom";


function Notes(props) {

    const {showAlert} = props;

    // Store the context in some variable
    const context = useContext(noteContext);

    // Assign the values here locally
    const { notes, getNotes, editNote } = context;

    const [note, setNote] = useState({ id : "", etitle: "", edescription: "", etag: "" });

    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate("/login");
        }
    }, [])

    const ref = useRef(null);

    const updateNote = (currentnote) => {
        ref.current.click();
        setNote({id : currentnote._id, etitle : currentnote.title, edescription: currentnote.description, etag: currentnote.tag});
        console.log("Yes I am trying to update")
    }

    const handleClick = (e)=>{
        console.log("I am making change in db");

        // It is sending array directly, so need to convert to string
        let sendTitle;
        if(Array.isArray(note.etitle)){
            sendTitle = note.etitle.join();
        }else{sendTitle = note.etitle}

        let sendDesc
        if(Array.isArray(note.edescription)){
            sendDesc = note.edescription.join();
        }else{sendDesc = note.edescription}

        let sendTag;
        if(Array.isArray(note.etag)){
            sendTag = note.etag.join();
        }else{sendTag = note.etag}



        editNote(note.id, sendTitle, sendDesc, sendTag);
        e.preventDefault();  // For not reloading page
        props.showAlert("success", "Changes made successfully")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: [e.target.value] })
    }


    return (
        <>
            <AddNote showAlert={showAlert}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Note</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} minLength={5} required aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="edescription">Description</label>
                                    <textarea type="text" className="form-control" id="edescription" name="edescription" minLength={5} required value = {note.edescription} rows="8" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etag">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" aria-describedby="emailHelp" value = {note.etag} placeholder="Enter Tag" onChange={onChange} />
                                </div>
                                {/* <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Update changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NotesItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/> // Sending the whole note as props
                })}
            </div>
        </>
    )
}

export default Notes
