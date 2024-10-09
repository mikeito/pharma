import { createReducer } from '@reduxjs/toolkit';
import clientActions from './clientActions';

export const ClientState = {
  clients: {
    loading: false,
    data: [],
    error: null as string | null,
  },
};

const clientReducer = createReducer(ClientState, (builder) => {
  builder

    .addCase(clientActions.getClients.pending, (state) => {
      state.clients.loading = true;
      state.clients.error = null;
    })
    .addCase(clientActions.getClients.fulfilled, (state, action) => {
      state.clients.data = action.payload;
      state.clients.loading = false;
    })
    .addCase(clientActions.getClients.rejected, (state, action) => {
      state.clients.loading = false;
      state.clients.error = action.error as string;
    });
});

export default clientReducer;
