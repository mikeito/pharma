import { createSelector } from '@reduxjs/toolkit';
const getOrganisationState = (state: any) => state.organisation || {};


export const selectOrganisations = createSelector(
    getOrganisationState,
    organisation => organisation.organisations
  )
export const searchOrganisations = createSelector(
    getOrganisationState,
    organisation => organisation.search
  )
