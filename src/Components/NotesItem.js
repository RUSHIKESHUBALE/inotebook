import React from 'react'
import {
    Link
  } from "react-router-dom";


function NotesItem(props) {
    return (
        <div className = "col-md-6">
            <div className="card my-2" >
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <Link to="" className="btn btn-primary">Delete</Link>
                    </div>
            </div>
        </div>
    )
}

export default NotesItem
