import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';

function App() {
  const [visibleNavMenu, setVisibleNavMenu] = useState(false);
  const navClickHandler = () => setVisibleNavMenu(!visibleNavMenu);

  return (
    <>
      <Navbar navClickHandler={navClickHandler} />
      {visibleNavMenu && <NavDropdown navClickHandler={navClickHandler} />}
    </>
    
  );
}

export default App;
