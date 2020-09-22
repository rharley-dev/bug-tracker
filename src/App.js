import React from 'react';
import { useSelector } from 'react-redux'; // hook to grab data in state
import Login from './View/Login/login.jsx';

function App() {
  const { auth } = useSelector(state => state);
  return <div>{!auth.LoggedIn ? <Login /> : <h1>Hello</h1>} </div>;
}

export default App;
