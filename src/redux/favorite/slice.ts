import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FavoritetState } from "./types";
import { Product } from "../products/types";

const initialState: FavoritetState = {
  favorites: [],
};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<Product>) {
      state.favorites.push(action.payload);
    },
    delFavorite(state, action: PayloadAction<Product>) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setFavorite, delFavorite } = favorite.actions;

export default favorite.reducer;
