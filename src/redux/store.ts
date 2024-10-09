import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import redirectMiddleware from './middlewares/redirectMiddleware';
import authReducer from './modules/auth/authReducer';
import serviceReducer from './modules/services/serviceReducer';
import transactionReducer from './modules/transactions/transactionReducer';
import accountReducer from './modules/accounts/accountReducer';
import userReducer from './modules/users/userReducer';
import clientReducer from './modules/clients/clientReducer';
import organisationReducer from './modules/organisations/organisationReducer';
import drugReducer from './modules/drugs/drugReducer';
import reservationReducer from './modules/reservations/reservationReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'], //? Specify which reducers to persist
};

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
  transaction: transactionReducer,
  account: accountReducer,
  user: userReducer,
  client: clientReducer,
  organisation: organisationReducer,
  drug:drugReducer,
  reservation:reservationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfiguredStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(redirectMiddleware),
  });

export const store = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
