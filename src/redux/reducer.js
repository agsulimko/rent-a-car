// reducer.js
import { combineReducers } from '@reduxjs/toolkit';

import { autosReducer } from './slice';

export const reducer = combineReducers({
  autos: autosReducer,
});
