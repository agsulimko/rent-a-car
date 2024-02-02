// import { createSlice } from '@reduxjs/toolkit';

// import fetchAdverts from './thunks';

// const initialState = {
//   adverts: [],

//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const advertsSlice = createSlice({
//   name: 'adverts',
//   initialState,

//   extraReducers: builder =>
//     builder

//       .addCase(fetchAdverts.pending, handlePending)
//       .addCase(fetchAdverts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.equipment = action.payload;
//       })
//       .addCase(fetchAdverts.rejected, handleRejected),
// });

// export const advertsReducer = advertsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import fetchAdverts from './thunks';

// const initialState = {
//   adverts: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const advertsSlice = createSlice({
//   name: 'adverts',
//   initialState,

//   extraReducers: builder =>
//     builder
//       .addCase(fetchAdverts.pending, handlePending)
//       .addCase(fetchAdverts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.adverts = action.payload; // Corrected line
//       })
//       .addCase(fetchAdverts.rejected, handleRejected),
// });

// export const advertsReducer = advertsSlice.reducer;

// slice.js
import { createSlice } from '@reduxjs/toolkit';
// import { getAdverts } from 'api/api';

import fetchAdverts from './thunks';
// export const fetchAdverts = createAsyncThunk(
//   'adverts/fetchAdverts',
//   async () => {
//     const adverts = await getAdverts();
//     return adverts;
//   }
// );

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
