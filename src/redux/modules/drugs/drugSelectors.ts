import { createSelector } from '@reduxjs/toolkit';
const getDrugState = (state: any) => state.drug || {};


export const selectDrugs= createSelector(
  getDrugState,
    drug => drug.drugs
  )
