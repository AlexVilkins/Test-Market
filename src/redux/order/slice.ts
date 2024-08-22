import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OrderState } from "./types";
import { Product } from "../products/types";

const initialState: OrderState = {
  orders: [],
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<Product[]>) {
      state.orders.push(action.payload);
    },
  },
});

export const { setOrder } = order.actions;

export default order.reducer;
