import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';
import appActions from '../clients/clientActions';
import { getLocalUser } from 'src/helpers/auth';

export const UserState = {
  user: {
    loading: false,
    data: {},
    error: null,
  },
};

const authReducer = createReducer(UserState, (builder) => {
  builder
    .addCase(appActions.initialize, (state) => {
      const user = getLocalUser();
      state.user.data = user;
    })
    .addCase(authActions.loginUser.pending, (state) => {
      state.user.loading = true;
    })
    .addCase(authActions.loginUser.fulfilled, (state, action) => {
      state.user.data = action.payload;
    })
    .addCase(authActions.loginUser.rejected, (state, action) => {
      state.user.loading = false;
      state.user.error = action.error;
    })
    .addCase(authActions.signInUser.pending, (state) => {
      state.user.loading = true;
    })
    .addCase(authActions.signInUser.fulfilled, (state, action) => {
      state.user.data = action.payload;
    })
    .addCase(authActions.signInUser.rejected, (state, action) => {
      state.user.loading = false;
      state.user.error = action.error;
    })
    .addCase(authActions.verifyUser.pending, (state) => {
      state.user.loading = true;
    })
    .addCase(authActions.verifyUser.fulfilled, (state, action) => {
      state.user.data = action.payload;
    })
    .addCase(authActions.verifyUser.rejected, (state, action) => {
      state.user.loading = false;
      state.user.error = action.error;
    });
});

export default authReducer;
