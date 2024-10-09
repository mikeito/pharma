import { createReducer } from '@reduxjs/toolkit';
import userAction from './userAction';

export const UserState = {
  users: {
    loading: false,
    data: [],
    error: null as string | null,
  },
};

const UserReducer = createReducer(UserState, (builder) => {
  builder
    .addCase(userAction.getUsers.pending, (state) => {
      state.users.loading = true;
    })
    .addCase(userAction.getUsers.fulfilled, (state, action) => {
      state.users.data = action.payload.data;
      state.users.loading = false;
    })
    .addCase(userAction.getUsers.rejected, (state, action) => {
      state.users.loading = false;
      state.users.error = action.error.message || 'Failed to fetch Users';
    });
});

export default UserReducer;
