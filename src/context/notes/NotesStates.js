import noteContext from "./notescontext";

const NoteState = (props)=>{
    const state = {
        name : "Rushikesh",
        age : 24
    }
    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;