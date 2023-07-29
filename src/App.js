import React, { useState } from 'react';
import Signup from './component/Singup';
import Login from './component/Login.js';
import MovieList from './component/MovieList';
import './App.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  return (
    <center>
      <div className='appContainer'>
      {!loggedIn && <Login onLogin={handleLogin} />}
      {!loggedIn && <Signup />}
      </div>
      {loggedIn && <MovieList onLogout={handleLogout} />}
    </center>
  );
};

export default App;
