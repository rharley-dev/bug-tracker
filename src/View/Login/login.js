import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';
import './login.css';

export default function login() {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: '',
    password: '',
  });

  function inputChange(e) {
    setFormInput({
      ...formInput, // set formInput as previous input
      // to use a non-string key you need array brackets
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    dispatch(signIn(formInput)); // need to pass in a payload (formInput)
    e.preventDefault(); // prevent page from reloading
  }

  return (
    <div className="loginBG">
      <form className="login-panel">
        <h1>Login:</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={inputChange}
          value={formInput.name}
        ></input>
        <input
          name="password"
          placeholder="Password"
          onChange={inputChange}
          value={formInput.password}
        ></input>
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
}
