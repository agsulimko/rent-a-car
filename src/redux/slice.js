// slice.js
import { createSlice } from '@reduxjs/toolkit';

import { fetchFavorites, fetchAdverts, fetchAutos } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.status = 'loading';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.status = 'failed';
};

const initialState = {
  adverts: [],
  favorites: [],
  autos: [],
  status: '',
  isLoading: false,
  error: null,
};
const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchAutos.pending, handlePending)

      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adverts = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favorites = action.payload;
        // state.adverts = action.payload;
      })
      .addCase(fetchAutos.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.autos = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)

      .addCase(fetchFavorites.rejected, handleRejected)
      .addCase(fetchAutos.rejected, handleRejected);
  },
});

export default advertsSlice.reducer;
