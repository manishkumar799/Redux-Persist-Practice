import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; //default local storage
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
