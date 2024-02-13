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
import advertsReducer from '../redux/slice';
import { filterReducer } from '../redux/filterSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['adverts', 'favorites'],
  // blacklist: ['filter'],
};

const rootReducer = combineReducers({
  adverts: advertsReducer,
  filter: filterReducer,
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

// import { configureStore } from '@reduxjs/toolkit';
// import advertsReducer from '../redux/slice';

// export const store = configureStore({
//   reducer: {
//     adverts: advertsReducer,
//   },
// });
