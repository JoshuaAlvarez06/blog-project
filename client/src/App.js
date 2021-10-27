import './App.css';
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';
import GlobalStyle from './globalStyles';
import Home from './components/Home';

function App() {
  const [visibleNavMenu, setVisibleNavMenu] = useState(false);
  const navClickHandler = () => setVisibleNavMenu(!visibleNavMenu);

  return (
    <>
      <GlobalStyle />
      <Navbar navClickHandler={navClickHandler} />
      {visibleNavMenu && <NavDropdown navClickHandler={navClickHandler} />}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
    
  );
}

export default App;
