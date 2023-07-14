import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Login, Logout, refresh, registers } from 'service/Api';

export const inctance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  inctance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  inctance.defaults.headers.common.Authorization = '';
};

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
      clearAuthHeader();
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
      const data = await refresh('/users​/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
