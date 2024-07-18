import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories, Category } from '../mockdata';
import { RootState } from './store';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return categories as unknown;
  }
);

interface CategoriesState {
  categories: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CategoriesState = {
  categories: [],
  status: 'idle',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload as Category[];
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectCategories = (state: RootState) => state.categories.categories;
