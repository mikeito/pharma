import { createSelector } from '@reduxjs/toolkit';

const getUserState = (state: any) => state.user || {};

export const selectUsers = createSelector(getUserState, (user) => user.users);
