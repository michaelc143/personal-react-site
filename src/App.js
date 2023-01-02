import logo from './logo.svg';
import './App.css';
import {Navbar, getDarkMode} from "./Navbar.js";
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import GraphicsProj from './pages/GraphicsProj.js'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='app-div'> 
    <article class="wrapper">
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/GraphicsProj' element={<GraphicsProj />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </article>
    </div>
  );
}

export default App;
