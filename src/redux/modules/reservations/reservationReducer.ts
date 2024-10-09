import { createReducer } from '@reduxjs/toolkit';
import reservationActions from './reservationActions';

export const ReservationState = {
    reservations: {
      loading: false,
      data: [],
      error: null || {},
    },
    reservation:{},
    error: null || {},
    creating:false
};

const reservationReducer = createReducer(ReservationState, (builder) => {
    builder
      .addCase(reservationActions.getReservations.pending, (state) => {
        state.reservations.loading = true;
      })
      .addCase(reservationActions.getReservations.fulfilled, (state, action) => {
        state.reservations.data = action.payload.data;  
        state.reservations.loading = false;
      })
      .addCase(reservationActions.getReservations.rejected, (state, action) => {
        state.reservations.loading = false;
        state.reservations.error = action.error;
      })
      .addCase(reservationActions.createReservation.pending, (state) => {
        state.creating = true;
      })
      .addCase(reservationActions.createReservation.fulfilled, (state, action) => {
        state.creating = false;
        state.reservation = action.payload;
      })
      .addCase(reservationActions.createReservation.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error;
      });
  });
  
  export default reservationReducer;