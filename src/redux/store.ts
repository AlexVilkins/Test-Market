import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import products from "./products/slice";
import basket from "./basket/slice";
import favorite from "./favorite/slice";
import order from "./order/slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products"],
};

const rootReducer = combineReducers({
  products,
  basket,
  favorite,
  order,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
