import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidenav from '../src/Component/Sidenav';
import About from '../src/Component/About';
import down from "../src/Images/down-2.png";
import '../src/Component/Main.css';
import { useState } from 'react';
import Main from './Component/Main';

function App() {
  const [display, setDisplay] = useState(true);

  const about = () => {
    setDisplay(false);
  }
  return (
    <>
      <Router>
        <Link to="/Sidenav">
          <div className={display ? 'down' : 'display-none'} onClick={about}>
            <img src={down} />
          </div>
        </Link>
        <Routes>
          <Route path="/Sidenav" element={<Sidenav />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <Main displayValue={display} />
    </>
  );
}

export default App;
