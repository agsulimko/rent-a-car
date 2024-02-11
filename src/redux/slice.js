// slice.js
import { createSlice } from '@reduxjs/toolkit';

import fetchAdverts from './thunks';

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
    status: '',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export default advertsSlice.reducer;
