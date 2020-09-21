import { createSlice } from '@reduxjs/toolkit';

// createSlice easy way to create reducer with initial state in one const
const slice = createSlice({
  name: 'auth',
  initialState: {
    admin: false,
    loggedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;
      state.loggedIn = true;
      state.admin = true;
    },
    signOut: state => {
      state.loggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {},
  },
});

export default slice.reducer;

export const { signIn, signOut, createUser } = slice.actions;
