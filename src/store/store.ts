import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import catalogReducer from './catalogSlice';
import categories from './categoriesSlice';
import productsSlice from './productsSlice';


export const store = configureStore({
  reducer: {
    location: locationReducer,
    catalog: catalogReducer,
    categories: categories,
    products: productsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;