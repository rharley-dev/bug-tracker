import React from 'react';
import { useSelector } from 'react-redux'; // hook to grab data in state
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './View/Login/login.jsx';
import Sidebar from './View/Sidbar/sidebar.jsx';

function App() {
  const { auth } = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : <></>}
      <Sidebar />
    </Router>
  );
}

export default App;
