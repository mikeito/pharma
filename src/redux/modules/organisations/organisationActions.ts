import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'src/api/route';
import axios from 'axios';

const getOrganizations = createAsyncThunk('organisations/getOrganisations', async () => {
 const res = await apiClient('/organisations', 'GET');
  console.log(res)
  
});

const createOrganisation = createAsyncThunk('organisations/createOrganisation', async (data?:any) => {
    return await apiClient('/organisations', 'POST', data);    
    
  });

  const searchOrganisations = createAsyncThunk(
    'organisations/searchOrganisations',
    async (data: { type: string; term: string }) => {
      console.log("data action", data)
      return await apiClient(`/organisations/search`, 'POST', data);     
    }
  );

  // const searchOrganisations = createAsyncThunk('organisations/searchOrganisations', async (data: {type: string, term: string}) => {
  //   try {
  //     const response = await axios.post('/api/organisations', data);
  
  
  //     // const res = await respon
  //     return response;
  //   } catch (error:any) {
  //     console.error('Error searching organisations:', error.message);
  //   }
  // })

export default { 
    getOrganizations,
    createOrganisation,
    searchOrganisations,
 };

 