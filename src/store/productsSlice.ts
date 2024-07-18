import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, products } from "../mockdata";
import { RootState } from "./store";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); 
    return products as unknown;
  }
);

interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload as Product[];
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
