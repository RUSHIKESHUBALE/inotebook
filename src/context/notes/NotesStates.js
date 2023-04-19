import noteContext from "./notescontext";
import { useState } from "react";

const NoteState = (props) => {

  // host 
  const host = "http://localhost:5000";

  // Pass the hardcoded value for now
  // const notesInitial = [
  //   {
  //     "_id": "642eesfdb06341450desad718e4343f",
  //     "user": "642eb00c41450ad718e4343a",
  //     "title": "Updated latest value",
  //     "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we  moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
  //     "tag": "Update",
  //     "timeStamp": "2023-04-06T11:43:31.730Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "6VEDCXAS42f702a38a1qawdc77sq833417d73",
  //     "user": "642eb00c41450ad718e4343a",
  //     "title": "Both commadn run",
  //     "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we  moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
  //     "tag": "Lovestory",
  //     "timeStamp": "2023-04-07T01:21:46.708Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "642vedczf70qs2a38a1c77swa833417d73",
  //     "user": "642eb00c41450ad718e4343a",
  //     "title": "Both commadn run",
  //     "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we  moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
  //     "tag": "Lovestory",
  //     "timeStamp": "2023-04-07T01:21:46.708Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "642f702a3qw8a1c7wq7833417ewsd73",
  //     "user": "642eb00c41450ad718e4343a",
  //     "title": "Both commadn run",
  //     "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we  moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
  //     "tag": "Lovestory",
  //     "timeStamp": "2023-04-07T01:21:46.708Z",
  //     "__v": 0
  //   }
  // ]

  const notesInitial = [];

  // This will get sent 
  const [notes, setNotes] = useState(notesInitial)


  // Fetch all Notes 
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWIwMGM0MTQ1MGFkNzE4ZTQzNDNhIn0sImlhdCI6MTY4MDc4MTM0M30.d22oIdskPRJ3JxmNdKYMG_SvnX1vOPqehyjMZrzFI7M"
      },
    });
    const jsonValues = await response.json();
    console.log(jsonValues);
    setNotes(jsonValues)
  }


  // Add note
  const addNote = async (title, description, tag) => {
    // Logic to make API calls
    // tag = "change this"
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWIwMGM0MTQ1MGFkNzE4ZTQzNDNhIn0sImlhdCI6MTY4MDc4MTM0M30.d22oIdskPRJ3JxmNdKYMG_SvnX1vOPqehyjMZrzFI7M"
      },
      body: JSON.stringify({ title, description, tag })
    });

    console.log(response)

    console.log("adding a new note")
    // TODO : Make api call to save this notes in DB
    let newNote = {
      "_id": "642f702asd73",
      "user": "642eb00c41450ad718e4343a",
      "title": title,
      "description": description,
      "tag": tag,
      "timeStamp": "2023-04-07T01:21:46.708Z",
      "__v": 0
    }

    setNotes(notes.concat(newNote))
  }
  // Delete note
  const deleteNote = (id) => {
    console.log("Deleting the note" + id);
    const removethatNote = (note) => {
      return note._id !== id;
    }
    const newNotesArray = notes.filter(removethatNote);

    setNotes(newNotesArray);
  }

  // Edit note
  const editNote = async (id, title, description, tag) => {

    // Logic to call the API 
    const response = await fetch(`${host}/api/notes/addnote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWIwMGM0MTQ1MGFkNzE4ZTQzNDNhIn0sImlhdCI6MTY4MDc4MTM0M30.d22oIdskPRJ3JxmNdKYMG_SvnX1vOPqehyjMZrzFI7M"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const note = notes[index];
      if (note._id === id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
      }

    }
  }


  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;