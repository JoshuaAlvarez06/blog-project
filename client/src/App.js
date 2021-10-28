import './App.css';
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';
import GlobalStyle from './globalStyles';
import Home from './components/Home';
import Posts from './components/Posts';
import Login from './components/Login';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingPage from './components/LoadingPage';

function App() {
  const [visibleNavMenu, setVisibleNavMenu] = useState(false);
  const navClickHandler = () => setVisibleNavMenu(!visibleNavMenu);
  const { isLoading } = useAuth0();

  if (isLoading) return <LoadingPage />

  return (
    <>
      <GlobalStyle />
      <Navbar navClickHandler={navClickHandler} />
      {visibleNavMenu && <NavDropdown navClickHandler={navClickHandler} />}
      <Profile />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/posts'>
          <Posts />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </>
    
  );
}

export default App;
