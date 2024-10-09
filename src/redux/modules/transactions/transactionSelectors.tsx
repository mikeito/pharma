import { createSelector } from '@reduxjs/toolkit';
const getTransactionState = (state: any) => state.transaction || {};

export const selectTransaction = createSelector(getTransactionState, (transaction) => transaction.transactions);
