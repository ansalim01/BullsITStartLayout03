import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterSlices from "./slices/filterSlices";
import cartSlices from "./slices/cartSlices";

// export const store = configureStore({
//   reducer: { filterSlices, cartSlices },
// });
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,

} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ filters: filterSlices, cart: cartSlices });

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],

      },
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],
  //     },
  //   }),
});

export const persistor = persistStore(store)
export default store;



