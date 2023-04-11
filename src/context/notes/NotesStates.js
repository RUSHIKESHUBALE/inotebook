import noteContext from "./notescontext";
import { useState } from "react";

const NoteState = (props)=>{

    // Pass the hardcoded value for now
    const notesInitial = [
        {
          "_id": "642eb06341450ad718e4343f",
          "user": "642eb00c41450ad718e4343a",
          "title": "Updated latest value",
          "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we weren’t moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
          "tag": "Update",
          "timeStamp": "2023-04-06T11:43:31.730Z",
          "__v": 0
        },
        {
          "_id": "642f702a38a1c77833417d73",
          "user": "642eb00c41450ad718e4343a",
          "title": "Both commadn run",
          "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we weren’t moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
          "tag": "Lovestory",
          "timeStamp": "2023-04-07T01:21:46.708Z",
          "__v": 0
        },
        {
          "_id": "642f702a38a1c77833417d73",
          "user": "642eb00c41450ad718e4343a",
          "title": "Both commadn run",
          "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we weren’t moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
          "tag": "Lovestory",
          "timeStamp": "2023-04-07T01:21:46.708Z",
          "__v": 0
        },
        {
          "_id": "642f702a38a1c77833417d73",
          "user": "642eb00c41450ad718e4343a",
          "title": "Both commadn run",
          "description": "What we mean by copy and paste paragraphs is we are just trying to describe to you how easy we have made it to get messages and texts from here and send them to your bae, all you need to do is to scroll through the page and select the best one that truly describes and match your mood. Then, we weren’t moving in the wrong direction when we decided to put together these cute long paragraphs for her copy and paste ",
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