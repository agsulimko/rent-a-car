// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import autosReducer from // currentPageAutosReducer, // currentPageFavoritesReducer, // favoritesReducer,
'../redux/slice';
// import advertsReducer from '../redux/slice';
// import { filterReducer } from '../redux/filterSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    // 'adverts',
    'autos',
    'favorites',
    'currentPageFavorites',
    'currentPageAutos',
  ],
  // blacklist: ['autos'],
};

const rootReducer = combineReducers({
  autos: autosReducer,
  // favorites: favoritesReducer,
  // currentPageFavorites: currentPageFavoritesReducer,
  // currentPageAutos: currentPageAutosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
