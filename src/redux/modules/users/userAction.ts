import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from 'src/api/route';

const createUser = createAsyncThunk('users/createUser', async (data?:any) => {
  const response = await apiClient('/users', 'POST', data, ); 
  return response;
});
// const createUser = createAsyncThunk('users/createUser', async (data) => {
//   const response = await apiClient('/users?client_id=2d2d54c8-f3a1-44eb-b2cb-3dd9615897b0', 'POST', data, undefined, 8080);
//   if (response.success === 201) {
//     return {
//       redirectUrl: '/users',
//     };
//   }
//   return response;
// });

const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await apiClient('/users', undefined, undefined, undefined, 8080);
  if (response.success) {
    return response.data;
  }
  return response;
});

export default {
  getUsers,
  createUser,
};
