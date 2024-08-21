import { configureStore } from "@reduxjs/toolkit";

import products from "./products/slice";
import basket from "./basket/slice";
import favorite from "./favorite/slice";

export const store = configureStore({
  reducer: { products, basket, favorite },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
