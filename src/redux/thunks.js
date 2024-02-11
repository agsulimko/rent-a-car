import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from 'api/api';

const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (filters, thunkAPI) => {
    try {
      const response = await getAdverts(filters);
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default fetchAdverts;
