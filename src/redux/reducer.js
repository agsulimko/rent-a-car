// import { combineReducers } from '@reduxjs/toolkit';

// // import { authReducer } from './auth/slice';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';

// import { advertsReducer } from './slice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   // whitelist: [],
// };

// const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

// export const reducer = combineReducers({
//   aadverts: advertsReducer,
//   // auth: authPersistedReducer,
// });
// import { combineReducers } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';

// import { advertsReducer } from './slice';
// import { authReducer } from './auth/slice'; // Import the authReducer

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   // whitelist: [],
// };

// const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

// export const reducer = combineReducers({
//   adverts: advertsReducer, // Corrected typo in 'aadverts' to 'adverts'
//   auth: authPersistedReducer,
// });

// import { combineReducers } from '@reduxjs/toolkit';
// import { advertsReducer } from './slice';

// export const reducer = combineReducers({
//   adverts: advertsReducer,
// });

import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './slice';

export const reducer = combineReducers({
  adverts: advertsReducer,
});
