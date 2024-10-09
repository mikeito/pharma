import { createReducer } from '@reduxjs/toolkit';
import serviceActions from './serviceActions';

export const ServiceState = {
  service: {
    loading: false,
    data: {},
    error: null,
  },
};

const serviceReducer = createReducer(ServiceState, (builder) => {
  builder
    .addCase(serviceActions.initService.pending, (state) => {
      state.service.loading = true;
    })
    .addCase(serviceActions.initService.fulfilled, (state, action) => {
      state.service.data = action.payload;
      state.service.loading = false;
    })
    .addCase(serviceActions.initService.rejected, (state, action) => {
      state.service.loading = false;
      state.service.error = action.error;
    });
});

export default serviceReducer;
