import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const inctance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const authRegisters = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await inctance.post('user/singap', user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const feathauthRegisters = createAsyncThunk(
  'auth/current',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await inctance.get('/users​/current', user);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
