import React from 'react';
import { useSelector } from 'react-redux'; // hook to grab data in state
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './View/Login/login';
import Sidebar from './View/Sidbar/sidebar';
import Bugs from './View/Pages/viewBugs';

function App() {
  const { auth } = useSelector(state => state);
  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Switch>
            <Route path='/viewbugs'><Bugs /></Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
