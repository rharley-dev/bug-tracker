import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '../../Controllers/Redux/authSlice';
import './login.css';

export default function Login() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: '',
    password: '',
  });

  function inputChanged(e) {
    setFormInput({
      // set formInput as previous input to not override state if already entered
      ...formInput,
      // to use a non-string or non-value key you need array brackets
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    // need to pass in a payload (formInput)
    dispatch(signIn(formInput)); 
    // prevent page from reloading
    e.preventDefault(); 
    
  }

  return (
    <div className="loginBG">
      <form className="login-panel">
        <h1 className="login">Login:</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={inputChanged}
          value={formInput.name}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputChanged}
          value={formInput.password}
        ></input>
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
}
