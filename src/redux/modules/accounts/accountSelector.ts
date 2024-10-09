import { createSelector } from '@reduxjs/toolkit';

const getAccountState = (state: any) => state.account || {};

export const selectAccounts = createSelector(getAccountState, (account) => account.accounts);
