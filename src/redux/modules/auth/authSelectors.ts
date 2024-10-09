import { createSelector } from '@reduxjs/toolkit';
const getAuthState = (state: any) => state.auth || {};

export const selectUser = createSelector(getAuthState, (auth) => auth.user);
