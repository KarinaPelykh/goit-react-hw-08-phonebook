import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const inctance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const authRegisters = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await inctance.post('/users/signup', user);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await inctance.post('/users/login', user);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await inctance.post('/users/logout');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const feathauthRegisters = createAsyncThunk(
//   'auth/current',
//   async (user, { rejectWithValue }) => {
//     try {
//       const { data } = await inctance.get('/users​/current', user);
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
