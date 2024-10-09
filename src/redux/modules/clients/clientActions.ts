import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'src/api/route';

const initialize = createAction('app/initialize');

const createClient = createAsyncThunk('clients/createClient', async (data) => {
  const response = await apiClient('/clients?client_id=f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454', 'POST', data, undefined, 8080);
  if (response.success === 201) {
    return {
      redirectUrl: '/clients',
    };
  }
  return response;
});

const getClients = createAsyncThunk('clients/getClients', async () => {
  const response = await apiClient('/clients', undefined, undefined, undefined, 8080);
  if (response.success) {
    return response.data;
  }
  return response;
});

export default { createClient, getClients, initialize };
