import noteContext from "./notescontext";
import { useState } from "react";

const NoteState = (props)=>{

    // Pass the hardcoded value for now
    const notesInitial = [
        {
          "_id": "642eb06341450ad718e4343f",
          "user": "642eb00c41450ad718e4343a",
          "title": "Updated latest value",
          "description": "Updated value of description",
          "tag": "Update",
          "timeStamp": "2023-04-06T11:43:31.730Z",
          "__v": 0
        },
        {
          "_id": "642f702a38a1c77833417d73",
          "user": "642eb00c41450ad718e4343a",
          "title": "Both commadn run",
          "description": "Ifeddddddddddh",
          "tag": "Lovestory",
          "timeStamp": "2023-04-07T01:21:46.708Z",
          "__v": 0
        }
      ]
    
    // This will get sent 
    const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;