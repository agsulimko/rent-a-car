import { combineReducers } from '@reduxjs/toolkit';
// import { advertsReducer } from './slice';
import {
  autosReducer,
  favoritesReducer,
  currentPageFavoritesReducer,
  currentPageAutosReducer,
} from './slice';

export const reducer = combineReducers({
  // adverts: advertsReducer,
  autos: autosReducer,
  favorites: favoritesReducer,
  currentPageFavorites: currentPageFavoritesReducer,
  currentPageAutos: currentPageAutosReducer,
});
