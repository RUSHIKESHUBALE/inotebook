import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoteStates from './context/notes/NotesStates'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <NoteStates>
      <Router>
        <Navbar />
        <Routes>
          <Route exaxt path = '/' element={<Home/>}/>
          <Route exaxt path = '/about' element={<About/>}/>
        </Routes>
      </Router>
    </NoteStates>
    </>
  );
}

export default App;
