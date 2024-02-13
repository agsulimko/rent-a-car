import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './slice';

export const reducer = combineReducers({
  adverts: advertsReducer,
});
