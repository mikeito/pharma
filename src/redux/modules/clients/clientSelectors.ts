import { createSelector } from '@reduxjs/toolkit';

const getClientState = (state: any) => state.client || {};

export const selectClients = createSelector(getClientState, (client) => client.clients);
