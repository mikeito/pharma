import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'src/api/route';


const getReservations = createAsyncThunk('reservations/getReservations', async () => {
  return await apiClient('/reservations', 'GET');
  
});

const createReservation = createAsyncThunk('reservations/createReservation', async (data?:any) => {
    return await apiClient('/reservations', 'POST', data);    
    
  });

export default { 
    getReservations,
    createReservation
 };
