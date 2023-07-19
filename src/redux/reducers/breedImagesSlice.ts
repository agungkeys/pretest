import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TBreedImage } from './types'

interface BreedImagesState {
  data: TBreedImage[];
  loading: boolean;
  error: string | null;
}

const initialState: BreedImagesState = {
  data: [],
  loading: false,
  error: null,
};

const breedImagesSlice = createSlice({
  name: 'breedImages',
  initialState,
  reducers: {
    fetchBreedImagesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBreedImagesSuccess(state, action: PayloadAction<TBreedImage[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchBreedImagesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBreedImagesStart,
  fetchBreedImagesSuccess,
  fetchBreedImagesFailure,
} = breedImagesSlice.actions;

export default breedImagesSlice.reducer;