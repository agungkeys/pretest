import { configureStore } from '@reduxjs/toolkit'
import themeModeReducer from './reducers/themeModeSlice'
import breedReducer from './reducers/breedsSlice'
import breedImagesReducer from './reducers/breedImagesSlice'

export const store = configureStore({
  reducer: {
    themeMode : themeModeReducer,
    breeds: breedReducer,
    breedImages: breedImagesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch