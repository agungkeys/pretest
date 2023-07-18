import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TBreed } from './types'

interface BreedsState {
  data: TBreed[];
  loading: boolean;
  error: string | null;
}

const initialState: BreedsState = {
  data: [],
  loading: false,
  error: null,
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    fetchBreedsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBreedsSuccess(state, action: PayloadAction<TBreed[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchBreedsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBreedsStart,
  fetchBreedsSuccess,
  fetchBreedsFailure,
} = breedsSlice.actions;

export default breedsSlice.reducer;