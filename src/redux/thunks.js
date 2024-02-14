// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getAdverts } from 'api/api';

// const fetchAdverts = createAsyncThunk(
//   'adverts/fetchAdverts',
//   async (filters, thunkAPI) => {
//     try {
//       const response = await getAdverts(filters);
//       return response;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export default fetchAdverts;
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

export const fetchFavorites = createAsyncThunk(
  'adverts/fetchFavorites',
  async (page, thunkAPI) => {
    try {
      const response = await getFavorites(page);

      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
