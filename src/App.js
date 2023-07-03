import logo from './logo.svg';
import './App.css';
import {Navbar, getDarkMode} from "./Navbar.js";
import Home from './pages/Home.js';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='app-div'> 
    <Navbar />
      <Routes>
        <Route path='/personal-react-site/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
