import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'src/api/route';


const getDrugs = createAsyncThunk('drugs/getDrugs', async () => {
  return await apiClient('/drugs', 'GET');
  
});

const createDrug = createAsyncThunk('drugs/createDrug', async (data?:any) => {
    return await apiClient('/drugs', 'POST', data);    
    
  });

export default { 
    getDrugs,
    createDrug
 };
