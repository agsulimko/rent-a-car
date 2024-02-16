import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAdverts, getFavorites } from 'api/api';
export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async ({ page, make }, thunkAPI) => {
    try {
      const response = await getAdverts(page, make);

      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchFavorites = createAsyncThunk(
  'adverts/fetchFavorites',
  async (page, thunkAPI) => {
    try {
      const response = await getFavorites(page);
      // console.log('getFavorites=', response);
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
