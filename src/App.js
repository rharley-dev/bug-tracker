import React from 'react';
import { useSelector } from 'react-redux'; // hook to grab data in state
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './View/Login/login';
import Sidebar from './View/Sidbar/sidebar';
import Bugs from './View/Pages/viewBugs';
import CreateBug from './View/BugCreate/Edit/bugForm';

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
            <Route path="/viewbugs">
              <div className="page-container">
                <Bugs />
              </div>
            </Route>
            <Route path="/createbugs">
              <div className="page-container">
                <CreateBug title="Create Bug" />
              </div>
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
