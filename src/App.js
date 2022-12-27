import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import Contact from './pages/Contact.js';
import Home from './pages/Home.js'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
