import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

// organize reducers within the state
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer, // same as reducer: reducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
