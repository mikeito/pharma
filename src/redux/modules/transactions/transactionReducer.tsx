import { createReducer } from '@reduxjs/toolkit';
import transactionActions from './transactionActions';

export const TransactionState = {
  transactions: {
    loading: false,
    data: [],
    error: null,
  },
};

const transactionReducer = createReducer(TransactionState, (builder) => {
  builder
    .addCase(transactionActions.getTransactions.pending, (state) => {
      state.transactions.loading = true;
    })
    .addCase(transactionActions.getTransactions.fulfilled, (state, action) => {
      state.transactions.data = action.payload.data;

      state.transactions.loading = false;
    })
    .addCase(transactionActions.getTransactions.rejected, (state, action) => {
      state.transactions.loading = false;
      state.transactions.error = action.error;
    });
});

export default transactionReducer;
