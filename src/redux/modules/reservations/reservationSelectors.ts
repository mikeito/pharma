import { createSelector } from '@reduxjs/toolkit';
const getReservationState = (state: any) => state.reservation || {};


export const selectReservations= createSelector(
  getReservationState,
    reservation => reservation.reservations
  )
