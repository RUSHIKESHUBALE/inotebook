import React from 'react'
import {
    Link
} from "react-router-dom";


function NotesItem(props) {
    return (
        <div className="col-md-4">
            <div className="card my-2" >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="contianer d-flex justify-content-between mb-2">
                        <button type="button" className="btn btn-primary" >Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesItem
