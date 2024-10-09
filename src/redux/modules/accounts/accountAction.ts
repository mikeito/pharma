import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'src/api/route';

const createAccount = createAsyncThunk('account/createAccount', async (data) => {
  const response = await apiClient('/accounts', 'POST', data);
  if (response.success === 201) {
    return {
      redirectUrl: '/accounts',
    };
  }
  return response;
});

const getAccounts = createAsyncThunk('accounts/getAccounts', async () => {
  const response = await apiClient('/accounts');
  //   if (response.success) {
  //     return response.data;
  // }
  //
  return response;
  //   throw new Error('Failed to fetch accounts');
});

export default {
  getAccounts,
  createAccount,
};
