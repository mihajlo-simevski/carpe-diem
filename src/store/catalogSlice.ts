import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Catalogs } from '../mockdata';

interface CatalogState {
  catalog: Catalogs | null;
}

const initialState: CatalogState = {
  catalog: null,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog: (state, action: PayloadAction<Catalogs>) => {
      state.catalog = action.payload;
    },
  },
});

export const { setCatalog } = catalogSlice.actions;

export default catalogSlice.reducer;