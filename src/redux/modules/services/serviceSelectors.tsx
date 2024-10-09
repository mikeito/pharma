import { createSelector } from '@reduxjs/toolkit';
const getServiceState = (state: any) => state.service || {};

export const selectService = createSelector(getServiceState, (service) => service.service);
