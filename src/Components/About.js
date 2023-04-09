import React, {useContext} from 'react';
import noteContext from '../context/notes/notescontext';

function About() {
  const a = useContext(noteContext)
  return (
    <div>
      <h1>I am in about {a.name}</h1>
    </div>
  )
}

export default About
