import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Product } from "./types";

export const featchProducts = createAsyncThunk<Product[]>(
  "products/featchProducts",
  async () => {
    const { data } = await axios.get<Product[]>(
      "https://66910f4126c2a69f6e8e426e.mockapi.io/test/products"
    );

    return data;
  }
);
