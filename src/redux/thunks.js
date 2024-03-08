import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAdverts, getFavorites, getAutos, getAutosFavorites } from 'api/api';
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
  async ({ page }, thunkAPI) => {
    try {
      const response = await getFavorites(page);

      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAutos = createAsyncThunk(
  'adverts/fetchAutos',
  async ({ page, make }, thunkAPI) => {
    try {
      const response = await getAutos(page, make);

      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAutosFavorites = createAsyncThunk(
  'adverts/fetchAutosFavorites',
  async (_, thunkAPI) => {
    try {
      const response = await getAutosFavorites();

      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
