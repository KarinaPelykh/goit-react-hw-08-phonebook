import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Login, Logout, refresh, registers, setAuthHeader } from 'service/Api';

export const inctance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const authRegisters = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const data = await registers(user);
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
      const data = await Login(user);
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
      Logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    console.log(token);
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await refresh();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
