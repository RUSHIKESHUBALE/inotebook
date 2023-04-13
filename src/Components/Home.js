import React, { useContext } from 'react'
import noteContext from '../context/notes/notescontext'
import Notes from './Notes';

function Home() {

  // Store the context in some variable
  const context = useContext(noteContext);

  // Assign the values here locally
  const { notes, setNotes } = context;

  return (
    <div className="container my-3">
      <Notes />
    </div>
  )
}

export default Home
