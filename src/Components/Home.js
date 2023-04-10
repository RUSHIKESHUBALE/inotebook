import React, {useContext} from 'react'
import noteContext from '../context/notes/notescontext'

function Home() {

  // Store the context in some variable
  const context = useContext(noteContext);
  
  // Assign the values here locally
  const {notes, setNotes} = context;

  return (
    <div className="container my-3">
      <h2>Add your Note here</h2>
      <div className = "my-3">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
      </div>

      <h2>Your notes</h2>
      {notes.map((note)=>{
        return note.title
      })}
    </div>
  )
}

export default Home
