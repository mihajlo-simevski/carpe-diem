import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../mockdata';

interface LocationState {
  location: Location | null;
}

const initialState: LocationState = {
  location: null,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;