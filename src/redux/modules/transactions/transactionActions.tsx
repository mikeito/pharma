import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'src/api/route';

const getTransactions: any = createAsyncThunk('transactions/getAll', async () => {
  const response = await apiClient('/transactions');

  return response;
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTransactions,
};
