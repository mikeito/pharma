import { createReducer } from '@reduxjs/toolkit';
import drugActions from './drugActions';

export const DrugState = {
    drugs: {
      loading: false,
      data: [],
      error: null || {},
    },
    drug:{},
    error: null || {},
    creating:false
};

const drugReducer = createReducer(DrugState, (builder) => {
    builder
      .addCase(drugActions.getDrugs.pending, (state) => {
        state.drugs.loading = true;
      })
      .addCase(drugActions.getDrugs.fulfilled, (state, action) => {
        state.drugs.data = action.payload.data;  
        state.drugs.loading = false;
      })
      .addCase(drugActions.getDrugs.rejected, (state, action) => {
        state.drugs.loading = false;
        state.drugs.error = action.error;
      })
      .addCase(drugActions.createDrug.pending, (state) => {
        state.creating = true;
      })
      .addCase(drugActions.createDrug.fulfilled, (state, action) => {
        state.creating = false;
        state.drug = action.payload;
      })
      .addCase(drugActions.createDrug.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error;
      });
  });
  
  export default drugReducer;