import React, { useContext } from 'react'
import noteContext from '../context/notes/notescontext'
import Notes from './Notes';

function Home(props) {

  // Store the context in some variable
  const context = useContext(noteContext);

  // Assign the values here locally
  const { notes, setNotes } = context;

  const {showAlert} = props;

  return (
    <div className="container my-3">
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home
