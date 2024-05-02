import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import loginReducer from './loginSlice';

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer for the login slice
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

// Create the Redux store
const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
  },
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
