import React from 'react';
import { Link } from 'react-router-dom'; //href for route navigation
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../Controllers/Redux/authSlice';
import './sidebar.css';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  function SignOut() {
    dispatch(signOut());
  }
  return (
    <div className="sidebar">
      <Link className="nav-link" to="/">
        <h2 className="brand">Bug-Tracker</h2>
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/viewbugs" className="nav-link">
            View Bugs
          </Link>
        </li>
        <li>
          <Link to="/createbugs" className="nav-link">
            Create Bug
          </Link>
        </li>
      </ul>
      <button className="logout" onClick={SignOut}>
        Logout
      </button>
    </div>
  );
}
