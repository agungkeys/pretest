import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { TBreed, TBreeds } from './types'

interface BreedsState {
  data: TBreed[];
  loading: Boolean;
  error: String | null;
  hasMore: Boolean;
  page: number;
}

const initialState: BreedsState = {
  data: [],
  loading: false,
  error: null,
  hasMore: true,
  page: 1,
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
    fetchMoreBreedsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoreBreedsSuccess(state, action: PayloadAction<TBreed[]>) {
      const isHasMore = action.payload.length > 0
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        error: null,
        hasMore: isHasMore
      }
      
    },
    // fetchMoreBreedsSuccess(state, action: PayloadAction<TBreed[]>) {
    //   const newData = action.payload;
    //   const { data, page } = current(state);
    //   const isHasMore = !!(newData.length > 0);
    //   return {
    //     ...state,
    //     data: [...data, ...action.payload],
    //   }
    //   state.data = [...data, ...action.payload];
    //   state.loading = false;
    //   state.error = null;
    //   state.hasMore = isHasMore;
    //   state.page = page;

    // },
    fetchMoreBreedsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBreedsStart,
  fetchBreedsSuccess,
  fetchBreedsFailure,
  fetchMoreBreedsStart,
  fetchMoreBreedsSuccess,
  fetchMoreBreedsFailure
} = breedsSlice.actions;

export default breedsSlice.reducer;