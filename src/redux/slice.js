import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllExercises,
  fetchBodyParts,
  fetchEquipment,
  fetchMuscles,
} from './thunks';

const initialState = {
  exercises: [],
  bodyParts: [],
  muscles: [],
  equipment: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchBodyParts.pending, handlePending)
      .addCase(fetchBodyParts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.bodyParts = action.payload;
      })
      .addCase(fetchBodyParts.rejected, handleRejected)
      .addCase(fetchMuscles.pending, handlePending)
      .addCase(fetchMuscles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.muscles = action.payload;
      })
      .addCase(fetchMuscles.rejected, handleRejected)
      .addCase(fetchEquipment.pending, handlePending)
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.equipment = action.payload;
      })
      .addCase(fetchEquipment.rejected, handleRejected)
      .addCase(fetchAllExercises.pending, handlePending)
      .addCase(fetchAllExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload;
      })
      .addCase(fetchAllExercises.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;
