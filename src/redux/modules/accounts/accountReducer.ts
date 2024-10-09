import { createReducer } from '@reduxjs/toolkit';
import accountAction from './accountAction';

export const AccountState = {
  accounts: {
    loading: false,
    data: [],
    error: null as string | null,
  },
};

const accountReducer = createReducer(AccountState, (builder) => {
  builder
    .addCase(accountAction.getAccounts.pending, (state) => {
      state.accounts.loading = true;
    })
    .addCase(accountAction.getAccounts.fulfilled, (state, action) => {
      state.accounts.data = action.payload.data;
      state.accounts.loading = false;
    })
    .addCase(accountAction.getAccounts.rejected, (state, action) => {
      state.accounts.loading = false;
      state.accounts.error = action.error.message || 'Failed to fetch accounts';
    });
});

export default accountReducer;
