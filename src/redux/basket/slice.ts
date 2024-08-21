import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BasketState } from "./types";
import { Product } from "../products/types";

const initialState: BasketState = {
  baskets: [],
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<Product>) {
      state.baskets.push(action.payload);
    },
    delBasket(state, action: PayloadAction<Product>) {
      state.baskets = state.baskets.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setBasket, delBasket } = basket.actions;

export default basket.reducer;
