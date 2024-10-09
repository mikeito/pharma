import { createReducer } from '@reduxjs/toolkit';
import organisationActions from './organisationActions';
import { searchOrganisations } from 'src/app/(main)/client/search/actions';

export const OrganisationState = {
    organisations: {
      loading: false,
      data: [],
      error: null || {},
    },
    organisation:{},
    error: null || {},
    creating:false,
    search: {
      loading: false,
      data: [],
      error: null || {},
    }
};

const organisationReducer = createReducer(OrganisationState, (builder) => {
    builder
      .addCase(organisationActions.getOrganizations.pending, (state) => {
        state.organisations.loading = true;
      })
      .addCase(organisationActions.getOrganizations.fulfilled, (state, action) => {
        state.organisations.data = action.payload.data;  
        state.organisations.loading = false;
      })
      .addCase(organisationActions.getOrganizations.rejected, (state, action) => {
        state.organisations.loading = false;
        state.organisations.error = action.error;
      })
      .addCase(organisationActions.createOrganisation.pending, (state) => {
        state.creating = true;
      })
      .addCase(organisationActions.createOrganisation.fulfilled, (state, action) => {
        state.creating = false;
        state.organisation = action.payload;
      })
      .addCase(organisationActions.createOrganisation.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error;
      })
      .addCase(organisationActions.searchOrganisations.pending, (state) => {
        state.search.loading = true;
      })
      .addCase(organisationActions.searchOrganisations.fulfilled, (state, action) => {
        state.search.loading = false;
        state.search.data = action.payload;
      })
      .addCase(organisationActions.searchOrganisations.rejected, (state, action) => {
        state.search.loading = false;
        state.search.error = action.error;
      });
  });
  
  export default organisationReducer;