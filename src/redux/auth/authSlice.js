import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  inatialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    error: null,
    loading: false,
    isLoggedIn: false,
  },
});
