import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAdverts } from 'api/api';
const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await getAdverts();
      console.log('response=', response);
      console.log('response.result=', response.result);
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export default fetchAdverts;
