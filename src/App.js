import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import NoteStates from './context/notes/NotesStates';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {

    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <NoteStates>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exaxt path='/' element={<Home showAlert={showAlert}/>} />
              <Route exaxt path='/about' element={<About />} />
              <Route exaxt path='/login' element={<Login showAlert={showAlert}/>} />
              <Route exaxt path='/signup' element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteStates>
    </>
  );
}

export default App;
