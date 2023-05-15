import logo from './logo.svg';
import './App.css';
import {Navbar, getDarkMode} from "./Navbar.js";
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import CodeTutorials from './pages/CodeTutorials';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='app-div'> 
    <Navbar />
      <Routes>
        <Route path='/personal-react-site/' element={<Home />} />
        <Route path='/CodeTutorials' element={<CodeTutorials />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
