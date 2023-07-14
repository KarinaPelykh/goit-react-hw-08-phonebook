import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  authLogin,
  authLogout,
  authRegisters,
  refreshThunk,
} from './authOperation';

const pending = (state, action) => {
  state.loading = true;
  state.error = '';
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.isRefreshing = false;
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    error: null,
    loading: false,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(authRegisters.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload;
      })
      .addCase(refreshThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(authLogin.pending, authRegisters.pending, authLogout.pending),
        pending
      )
      .addMatcher(
        isAnyOf(
          authLogin.rejected,
          authRegisters.rejected,
          authLogout.rejected
        ),
        rejected
      );
  },
});

export const authReduser = authSlice.reducer;
