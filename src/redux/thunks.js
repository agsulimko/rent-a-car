import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAutos } from 'api/api';
export const fetchAllAutos = createAsyncThunk(
  'adverts/fetchAllAutos',
  async (_, thunkAPI) => {
    try {
      const response = await getAutos();

      return response.result;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchMuscles = createAsyncThunk(
//   'exercises/fetchMuscles',
//   async (_, thunkAPI) => {
//     try {
//       const response = await getExercisesMuscles();

//       return response.result;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchEquipment = createAsyncThunk(
//   'exercises/fetchEquipment',
//   async (_, thunkAPI) => {
//     try {
//       const response = await getExercisesEquipment();

//       return response.result;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // exercisesThunks.js

// export const fetchAllExercises = createAsyncThunk(
//   'exercises/fetchAllExercises',
//   async ({ filter, body_parts, muscles, equipmentId }, thunkAPI) => {
//     try {
//       const response = await getAllExercises(
//         filter,
//         body_parts || muscles || equipmentId
//       );
//       return response;
//     } catch (e) {
//       console.log(e.message);

//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
