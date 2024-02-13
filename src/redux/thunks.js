import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAdverts, getFavorites } from 'api/api';
export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const response = await getAdverts(page);

      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export default fetchAdverts;

export const fetchFavorites = createAsyncThunk(
  'adverts/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const response = await getFavorites();
      // console.log('getFavorites=', response);
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export default fetchFavorites;
