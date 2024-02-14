// slice.js
import { createSlice } from '@reduxjs/toolkit';

import { fetchAdverts, fetchFavorites } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.status = 'loading';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.status = 'failed';
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    favorites: [],
    status: '',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adverts = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)

      .addCase(fetchFavorites.rejected, handleRejected);
  },
});

export default advertsSlice.reducer;
